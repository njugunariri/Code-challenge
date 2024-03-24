//Write a program whose major task is to 
//calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 


function calculateNetSalary(basicSalary, benefits) {
    // Validate input
    if (basicSalary <= 0 || benefits < 0) {
      return "Invalid input. Please enter positive values for salary and benefits.";
    }
  
    // Tax calculation (replace with your country's tax function)
    function calculatePayee(salary) {
      // Replace this with the actual tax calculation logic for your country.
      // This is a placeholder for demonstration purposes.
      if (salary <= 0) {
        return 0;
      }
      return Math.floor(salary * 0.1); // Placeholder: 10% tax on the whole salary
    }
  
    // Deduction rates (replace with your country's rates)
    const NHIFRate = 0.05; // 5% of basic salary
    const NSSFRate = 0.06; // 6% of basic salary
  
    // Calculate deductions
    const NHIFDeduction = basicSalary * NHIFRate;
    const NSSFDeduction = basicSalary * NSSFRate;
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate net salary
    const payee = calculatePayee(grossSalary);
    const netSalary = grossSalary - payee - NHIFDeduction - NSSFDeduction;
  
    // Prepare and return the result object
    return {
      grossSalary: grossSalary,
      NHIFDeduction: NHIFDeduction,
      NSSFDeduction: NSSFDeduction,
      payee: payee,
      netSalary: netSalary,
    };
  }
  
  // Example usage
  const basicSalary = 1000;
  const benefits = 200;
  const salaryInfo = calculateNetSalary(basicSalary, benefits);
  
  console.log("Gross Salary:", salaryInfo.grossSalary);
  console.log("NHIF Deduction:", salaryInfo.NHIFDeduction);
  console.log("NSSF Deduction:", salaryInfo.NSSFDeduction);
  console.log("Payee (Tax):", salaryInfo.payee);
  console.log("Net Salary:", salaryInfo.netSalary);