module.exports = {
  calculateCourseStats
}

async function calculateCourseStats (courseGradesData) {
  const statistics = {}
  courseGradesData.forEach(({ course, grade }) => {
    if (!statistics[course]) {
      statistics[course] = {
        highestGrade: 0,
        lowestGrade: 0,
        totalGrades: 0,
        count: 0
      }
    }
    const courseStats = statistics[course]
    courseStats.highestGrade = Math.max(courseStats.highestGrade, grade)
    courseStats.lowestGrade = Math.min(courseStats.lowestGrade, grade)
    courseStats.totalGrades += grade
    courseStats.count++
  })

  Object.keys(statistics).forEach(course => {
    const courseStats = statistics[course]
    courseStats.averageGrade = courseStats.totalGrades / courseStats.count
    delete courseStats.totalGrades
    delete courseStats.count
  })
  return statistics
}
