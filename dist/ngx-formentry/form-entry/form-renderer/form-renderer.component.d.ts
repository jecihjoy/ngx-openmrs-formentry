import { OnInit } from '@angular/core';
import 'hammerjs';
import { DataSources } from '../data-sources/data-sources';
import { NodeBase, LeafNode } from '../form-factory/form-node';
import { AfeFormGroup } from '../../abstract-controls-extension/afe-form-group';
import { ValidationFactory } from '../form-factory/validation.factory';
import { DataSource } from '../question-models/interfaces/data-source';
import { FormErrorsService } from '../services';
export declare class FormRendererComponent implements OnInit {
    private validationFactory;
    private dataSources;
    private formErrorsService;
    private document;
    parentComponent: FormRendererComponent;
    node: NodeBase;
    parentGroup: AfeFormGroup;
    childComponents: FormRendererComponent[];
    showTime: boolean;
    showWeeks: boolean;
    activeTab: number;
    dataSource: DataSource;
    isCollapsed: boolean;
    auto: any;
    constructor(validationFactory: ValidationFactory, dataSources: DataSources, formErrorsService: FormErrorsService, document: any);
    ngOnInit(): void;
    addChildComponent(child: FormRendererComponent): void;
    setUpRemoteSelect(): void;
    setUpFileUpload(): void;
    clickTab(tabNumber: any): void;
    loadPreviousTab(): void;
    isCurrentTabFirst(): boolean;
    isCurrentTabLast(): boolean;
    loadNextTab(): void;
    tabSelected($event: any): void;
    setPreviousTab(): void;
    hasErrors(): boolean;
    errors(): string[];
    scrollToControl(error: string): void;
    onDateChanged(node: LeafNode): void;
    upload(event: any): void;
    toggleInformation(infoId: any): void;
    private getErrors(node);
}
