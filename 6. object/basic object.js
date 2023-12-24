function info(name, country, job_title, salary, company){
  this.name = name
  this.country = country
  this.job_title = job_title
  this.salary = salary
  this.company = company
}
var belal = new info('Belal Hossain', 'Bangladesh', 'Software Engineer', 50000, 'Google')
console.log('Full Information:', belal)
console.log('Company Name:', belal.company)