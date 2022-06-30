import { LightningElement, api, wire } from 'lwc';
import getKnowledgeArticle from '@salesforce/apex/KnowledgeUtils.getKnowledgeArticle';

export default class KnowledgeButton extends LightningElement {
    @api articleName;
    @api buttonLabel;
    @api variant;
    @api useIcon;
    @api iconName;
    @api confirmationButtonLabel;
    @api modalSize;

    isModalOpen = false;

    @wire(getKnowledgeArticle, { articleName: '$articleName' })
    article;

    get getIconName(){
        return `utility:${this.iconName}`;
    }

    get getModalSize(){
        return `slds-modal slds-fade-in-open slds-modal_${this.modalSize}`;
    }

    get getArticleTitle(){
        return this.article.data.Title;
    }

    get getArticleDetails(){
        return this.article.data.FAQ_Answer__c;
    }

    openModal() {
        this.isModalOpen = true;
    }
    
    closeModal() {
        this.isModalOpen = false;
    }
}