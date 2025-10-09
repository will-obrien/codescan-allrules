import { wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';

class Test {
    @wire(graphql, {})
    wiredMethod({ error, data }) {}
}