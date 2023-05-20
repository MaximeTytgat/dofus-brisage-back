import requests
from pymongo import MongoClient
import time

# Connecter à la base de données MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["dofusdb"]
collection = db["items"]

# URL de l'API
url = "https://api.dofusdb.fr/items?typeId[$ne]=203&$sort=-id&slug.fr[$search]=&typeId[$in][]=1&typeId[$in][]=9&typeId[$in][]=2&typeId[$in][]=3&typeId[$in][]=4&typeId[$in][]=5&typeId[$in][]=6&typeId[$in][]=7&typeId[$in][]=8&typeId[$in][]=19&typeId[$in][]=20&typeId[$in][]=21&typeId[$in][]=22&typeId[$in][]=83&typeId[$in][]=99&typeId[$in][]=114&typeId[$in][]=271&typeId[$in][]=11&typeId[$in][]=82&typeId[$in][]=17&typeId[$in][]=10&typeId[$in][]=16&typeId[$in][]=151&typeId[$in][]=15&typeId[$in][]=26&typeId[$in][]=34&typeId[$in][]=35&typeId[$in][]=36&typeId[$in][]=38&typeId[$in][]=39&typeId[$in][]=41&typeId[$in][]=40&typeId[$in][]=46&typeId[$in][]=47&typeId[$in][]=48&typeId[$in][]=50&typeId[$in][]=51&typeId[$in][]=53&typeId[$in][]=54&typeId[$in][]=55&typeId[$in][]=56&typeId[$in][]=57&typeId[$in][]=58&typeId[$in][]=60&typeId[$in][]=59&typeId[$in][]=61&typeId[$in][]=63&typeId[$in][]=65&typeId[$in][]=66&typeId[$in][]=68&typeId[$in][]=70&typeId[$in][]=71&typeId[$in][]=78&typeId[$in][]=84&typeId[$in][]=95&typeId[$in][]=96&typeId[$in][]=98&typeId[$in][]=103&typeId[$in][]=104&typeId[$in][]=105&typeId[$in][]=106&typeId[$in][]=107&typeId[$in][]=108&typeId[$in][]=109&typeId[$in][]=110&typeId[$in][]=111&typeId[$in][]=119&typeId[$in][]=125&typeId[$in][]=152&typeId[$in][]=153&typeId[$in][]=154&typeId[$in][]=164&typeId[$in][]=167&typeId[$in][]=174&typeId[$in][]=175&typeId[$in][]=178&typeId[$in][]=179&typeId[$in][]=183&typeId[$in][]=185&typeId[$in][]=195&typeId[$in][]=189&typeId[$in][]=197&typeId[$in][]=209&typeId[$in][]=211&typeId[$in][]=219&typeId[$in][]=230&typeId[$in][]=231&typeId[$in][]=232&typeId[$in][]=233&typeId[$in][]=258&typeId[$in][]=228&typeId[$in][]=229&typeId[$in][]=266&typeId[$in][]=262&typeId[$in][]=241&typeId[$in][]=278&level[$lte]=200&$select[]=id&$select[]=name&$select[]=criteria&$select[]=description&$select[]=effects&$select[]=recipeSlots&$select[]=etheral&$select[]=enhanceable&$select[]=iconId&$select[]=itemSetId&$select[]=level&$select[]=possibleEffects&$select[]=slug&$select[]=typeId&lang=fr&$skip="

skip = 0
total = None

while total is None or skip < total:

    # Faire la requête à l'API
    response = requests.get(url + str(skip))
    response.raise_for_status() # Vérifier qu'il n'y a pas d'erreur

    # Extraire les données
    data = response.json()
    items = data['data']

    # Insérer les items dans la base de données
    collection.insert_many(items)

    # Mettre à jour la pagination
    total = data['total']
    skip += data['limit']

    # Respecter les limites de taux d'appel de l'API
    time.sleep(1)

    print(skip, end="") ; print(" / ", end="") ; print(total)
