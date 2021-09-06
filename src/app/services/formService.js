const handleError = async (response)=>{
        if(!response.ok)
            throw Error(response.status)
        let json = await response.json()
        return json
}

const postDamageInfo = async (props) => {
    try {
        let response = await fetch("http://localhost:9898/api/v1/damage-reports/", {
            method: 'POST',
            body: props,
        })
        let json = await response.json()
        console.log(json);
        return json.unique_id
    }
    catch (error) {
        console.log(error);
    }
}

const getStatus = async (formData) => {
    try {
        let response = await fetch("http://localhost:9898/api/v1/damage-reports/track/", {
            method: 'POST',
            body: formData,
        })
        let json = await handleError(response)
        // let json = await response.json()
        return json
    }
    catch (error) {
        return(error);
    }
}

const getTypeOfDamages = () => {
    let arrayOfDamages = fetch("http://localhost:9898/api/v1/damage-reports/type-of-damages/")
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => {
            console.error("Error", error);
        })
    return arrayOfDamages
}

const sendSuggestions = async (props) => {
    try {
        let sugges = await fetch("http://localhost:9898/api/v1/damage-reports/suggestions/", {
            method: 'POST',
            body: props,
        })
        return sugges
    }
    catch (error) {
        return error
    }

}
export { postDamageInfo, getTypeOfDamages, getStatus ,sendSuggestions }