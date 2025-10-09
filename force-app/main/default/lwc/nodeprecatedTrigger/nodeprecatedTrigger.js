import { LightningElement } from 'lwc';

class Foo extends LightningElement {
    static observedAttributes = ['title'];
}

class Bar extends LightningElement {
    static get observedAttributes() {
        return ['title'];
    }
}

class Baz extends LightningElement {
    attributeChangedCallback(name, prevValue, nextValue) {
        if (name === 'title') {
            // ...
        }
    }
}