// Create a class named ScriptCodeSavvy
class ScriptCodeSavvy {
    constructor() {
        this.snippets = [];
    }

    // Method: add a code snippet to the ScriptCodeSavvy's collection
    addSnippet(snippet) {
        this.snippets.push(snippet);
        console.log(`Added code snippet "${snippet}" to the ScriptCodeSavvy's collection.`);
    }

    // Method: remove a code snippet from the ScriptCodeSavvy's collection
    removeSnippet(snippet) {
        const index = this.snippets.indexOf(snippet);
        if (index !== -1) {
            this.snippets.splice(index, 1);
            console.log(`Removed code snippet "${snippet}" from the ScriptCodeSavvy's collection.`);
        } else {
            console.log(`Code snippet "${snippet}" is not found in the ScriptCodeSavvy's collection.`);
        }
    }

    // Method: list all code snippets in the ScriptCodeSavvy's collection
    listSnippets() {
        console.log("Code snippets in the ScriptCodeSavvy's collection:");
        this.snippets.forEach(snippet => {
            console.log(snippet);
        });
    }
}

// Create an instance of ScriptCodeSavvy named myScriptCodeSavvy
const myScriptCodeSavvy = new ScriptCodeSavvy();

// Add code snippets to the ScriptCodeSavvy's collection
myScriptCodeSavvy.addSnippet("Function to calculate factorial");
myScriptCodeSavvy.addSnippet("Algorithm to sort an array");
myScriptCodeSavvy.addSnippet("Regular expression for email validation");

// List all code snippets in the ScriptCodeSavvy's collection
myScriptCodeSavvy.listSnippets();

// Remove a code snippet from the ScriptCodeSavvy's collection
myScriptCodeSavvy.removeSnippet("Algorithm to sort an array");

// List all code snippets in the ScriptCodeSavvy's collection after removal
myScriptCodeSavvy.listSnippets();
