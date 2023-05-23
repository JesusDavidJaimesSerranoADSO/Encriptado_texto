export default{
    data(){
        return{
            dato:"",
            encriptado:"",
            caracter:""
        }
    },
    methods:{
        encriptar(){
            this.encriptado=""

            for(let i=0; i < this.dato.length ;i++){

                this.caracter = this.dato.charAt(i)

                switch(this.caracter){

                    case "a":{
                        this.caracter = "ai"
                        break
                    }
                    case "e":{
                        this.caracter = "enter"
                        break
                    }
                    case "i":{
                        this.caracter = "imes"
                        break
                    }
                    case "o":{
                        this.caracter = "ober"
                        break
                    }
                    case "u":{
                        this.caracter = "ufat"
                        break
                    }
                }

                this.encriptado += this.caracter
            }
        },
        desencriptar(){

            this.encriptado=""

            let texto = this.dato

            texto =texto.replaceAll('ai', 'a')

            texto =texto.replaceAll('enter', 'e')

            texto =texto.replaceAll('imes', 'i')

            texto =texto.replaceAll('ober', 'o')

            texto =texto.replaceAll('ufat', 'u')

                this.encriptado = texto

        }
    }
}
