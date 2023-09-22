class User {
    constructor(username, keyword) {
        this._username = username;
        this._keyword = keyword;
    }

    // Getters e setters dos atributos dessa classe 

    get username() {
        return this.username;
    }

    set username(username) {
        this.username = username;
    }

    get keyword() {
        return this.keyword;
    }

    set keyword(keyword) {
        this.keyword = keyword;
    }

    // Métodos da classe

    login(usernameAttempt, keywordAttempt) {
        if (usernameAttempt == this.username() && this.keyword() == keywordAttempt) {
            console.log("Login efetuado com sucesso!");
        }
        else {
            if (usernameAttempt != this.username()) {
                console.log("Nome de usuário incorreto");
            }
            else if (keywordAttempt != this.keyword()) {
                console.log("Senha incorreta");
            }
            else {
                console.log("Nome de usuário e senha incorretos");
            }
        }
    }
    
    logout() {
        console.log("Você saiu da sua conta");
    }

    static signUp(chosenUsername, chosenKeyword) {
        username(chosenUsername);
        keyword(chosenKeyword);
    }

}

class DefaultUser extends User {
    constructor(username, keyword) {
        super(username, keyword);
    }

    // Getters e setters dos atributos dessa classe 
    
    
}

