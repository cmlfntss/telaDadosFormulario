var cnpj = "37356542000101"

console.log(cnpj);
console.log(cnpj.replace(/^(\d{2})(\d{3})(\d{3})(zd{4})(\d{2})/, "$1.$2.$3/$4-$"));