export default function getProfile() {
    return 'public-id-string';
}

function loggedIn(){
    return true;
}

function getCurrentUserEvents(){
    events = [
        {
            "category": "Educational",
            "cost": 10000,
            "date": "21/11/19 16:30",
            "date_created": "Wed, 21 Mar 2018 22:17:34 GMT",
            "description": "Going to be amazing",
            "id": 1,
            "location": "Pangani",
            "name": "PSG tournament",
            "public_userid": "b69bc555-92d3-4333-992c-8aee40fb967a"
        },
        {
            "category": "Fun",
            "cost": 455,
            "date": "2/11/18 12:30",
            "date_created": "Thu, 22 Mar 2018 08:53:29 GMT",
            "description": "Come with all defense",
            "id": 2,
            "location": "Pangani",
            "name": "Clubing",
            "public_userid": "b69bc555-92d3-4333-992c-8aee40fb967a"
        }
        
    ]

    return events;
}

function fetch(url){
    res = [
        {
            "category": "Fun",
            "cost": 455,
            "date": "2/11/18 12:30",
            "date_created": "Thu, 22 Mar 2018 08:53:29 GMT",
            "description": "Come with all defense",
            "id": 2,
            "location": "Pangani",
            "name": "Clubing",
            "public_userid": "b69bc555-92d3-4333-992c-8aee40fb967a"
        },
        {
            "category": "holiday",
            "cost": 3004,
            "date": "2/11/18 12:30",
            "date_created": "Tue, 03 Apr 2018 12:28:22 GMT",
            "description": "Having fun",
            "id": 3,
            "location": "andela",
            "name": "easter",
            "public_userid": "a6b180a9-4ff7-469b-9d5a-f372b36b371b"
        }
    ]

}

