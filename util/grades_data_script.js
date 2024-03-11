const axios = require('axios')

const gradesUrl = 'https://outlier-coding-test-data.onrender.com/grades.json'

async function getStudentsGradesData () {
  try {
    const response = await axios.get(gradesUrl)
    const jsonData = response.data
    return jsonData
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }
}
