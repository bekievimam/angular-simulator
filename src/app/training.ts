function calc (a:number, b:number): number  {
    return a + b
}

let uploadStatus:  "загрузка" | "успех" | "ошибка"
let textFormat: "прописная" | "строчная" | "заглавная"
interface User {
    name:string
    age:number
    passportId ? : string
}

 interface Employee extends User {
    position: string
    experience: number
 }

 function formatText (text:string,format: typeof textFormat) : string {
        if (format === "строчная") {
        return text.toLowerCase()
    }
        if (format === "прописная") {
            return text.toUpperCase()
        }

        if (format === "заглавная") {
            const firstLetter = text.charAt(0).toUpperCase()
            const rest = text.slice(1).toLowerCase()
            return firstLetter + rest
        }
        return text
}
function removeChar (text:string, char:string) : string {
    return text.replaceAll(char , "")
}
removeChar("банан", "а")

const users: User[] = [
{
    name: "Imam",
    age: 19,
},
{
    name: "Muhammad",
    age: 25,
}
]

const filteredUsers = users.filter(user => user.age >= 21)
