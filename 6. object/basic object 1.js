function info(name, country, job_title, salary, company){
  this.name = name
  this.country = country
  this.job_title = job_title
  this.salary = salary
  this.company = company
  this.showme = function(){
      console.log(this.name)
      console.log(this.country)
      console.log(this.job_title)
      console.log(this.salary)
      console.log(this.company)
  }
}
var belal = new info('Belal Hossain', 'Bangladesh', 'Software Engineer', 50000, 'Google')
belal.showme()
