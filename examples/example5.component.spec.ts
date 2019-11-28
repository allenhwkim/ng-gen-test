// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component, ElementRef } from '@angular/core';
import { DashboardComponent } from './example5.component';
import { CommonDataService, ShareEverythingDataService, OneviewPermissionService, DialogService } from '@rogers/oneview-components';
import { AppDataService } from '../app-data.service';
import { DashboardDataService } from './dashboard-data.service';
import { ProcessHupService } from './hup/process-hup.service';
import { ServiceSubTypes } from './service-subtypes.service';
import { NavigationService } from '../framework/navigation.service';
import { ActionsService } from '../actions/actions.service';
import { DealerCodeService } from './dealercode/dealer-code.service';

@Injectable()
class MockAppDataService {}

@Injectable()
class MockElementRef {
  nativeElement = {};
}

@Injectable()
class MockDashboardDataService {}

@Injectable()
class MockProcessHupService {}

@Injectable()
class MockServiceSubTypes {
  getServiceSubTypes = jest.fn();
}

@Injectable()
class MockNavigationService {}

@Injectable()
class MockActionsService {}

@Injectable()
class MockDealerCodeService {}

@Directive({ selector: '[oneviewPermitted]' }) // TODO, template must be user-configurable
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({name: 'translate'}) // TODO, template must be user-configurable
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'}) // TODO, template must be user-configurable
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'}) // TODO, template must be user-configurable
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('DashboardComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        DashboardComponent, TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        CommonDataService,
        ShareEverythingDataService,
        OneviewPermissionService,
        { provide: AppDataService, useClass: MockAppDataService },
        { provide: ElementRef, useClass: MockElementRef },
        { provide: DashboardDataService, useClass: MockDashboardDataService },
        { provide: ProcessHupService, useClass: MockProcessHupService },
        { provide: ServiceSubTypes, useClass: MockServiceSubTypes },
        DialogService,
        { provide: NavigationService, useClass: MockNavigationService },
        { provide: ActionsService, useClass: MockActionsService },
        { provide: DealerCodeService, useClass: MockDealerCodeService }      ]
    }).overrideComponent(DashboardComponent, {
      // set: { providers: [{ provide: MyComponentService, useClass: MyComponentService }] }
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run GetterDeclaration #isAccountHolder', async () => {
    component.commonData = component.commonData || {};
    component.commonData.agentInfo = {
      'consumer': '[object Object]',
      authorizationLevel: '[object Object]',
      authorozationLevel: 'authorozationLevel'
    };
    const isAccountHolder = component.isAccountHolder;

  });

  it('should run #ngOnInit()', async () => {
    component.accountSummary = component.accountSummary || {};
    component.accountSummary.lob = 'lob';
    component.dashboardData = component.dashboardData || {};
    component.dashboardData.getBillingDetails = jest.fn().mockReturnValue(observableOf({}));
    component.dashboardData = component.dashboardData || {};
    component.dashboardData.getPostDatedPPC = jest.fn().mockReturnValue(observableOf({}));
    component.dashboardData = component.dashboardData || {};
    component.dashboardData.getInteractions = jest.fn().mockReturnValue(observableOf({}));
    component.dashboardData = component.dashboardData || {};
    component.dashboardData.getSubscriptionsSummary = jest.fn().mockReturnValue(observableOf({}));
    component.dashboardData = component.dashboardData || {};
    component.dashboardData.getAdditionalServiceLinks = jest.fn();
    component.dashboardData = component.dashboardData || {};
    component.dashboardData.handleTreatmentsDataError = jest.fn();
    component.appData = component.appData || {};
    component.appData.getIDVSummary$ = observableOf({});
    component.shareEverythingService = component.shareEverythingService || {};
    component.shareEverythingService.getShareEverythingData = jest.fn();
    component.shareEverythingData = component.shareEverythingData || {};
    component.shareEverythingData.planName = 'planName';
    component.actionService = component.actionService || {};
    component.actionService.getActiveTreatments = jest.fn().mockReturnValue(observableOf({
      ecid: '[object Object]'
    }));
    component.actionService = component.actionService || {};
    component.actionService.getDispositionStatus = jest.fn().mockReturnValue(observableOf({}));
    component.ngOnInit();
    expect(component.dashboardData.getBillingDetails).toHaveBeenCalled();
    expect(component.dashboardData.getPostDatedPPC).toHaveBeenCalled();
    expect(component.dashboardData.getInteractions).toHaveBeenCalled();
    expect(component.dashboardData.getSubscriptionsSummary).toHaveBeenCalled();
    expect(component.dashboardData.getAdditionalServiceLinks).toHaveBeenCalled();
    expect(component.dashboardData.handleTreatmentsDataError).toHaveBeenCalled();
    expect(component.shareEverythingService.getShareEverythingData).toHaveBeenCalled();
    expect(component.actionService.getActiveTreatments).toHaveBeenCalled();
    expect(component.actionService.getDispositionStatus).toHaveBeenCalled();
  });

  it('should run #updateHeight()', async () => {
    component.dashboardFirstColumn = component.dashboardFirstColumn || {};
    component.dashboardFirstColumn.nativeElement = {
      offsetHeight: '[object Object]'
    };
    component.interactionList = component.interactionList || {};
    component.interactionList.nativeElement = {
      style: {
        height: '[object Object]'
      }
    };
    component.actionOffers = component.actionOffers || {};
    component.actionOffers.nativeElement = {
      style: {
        height: '[object Object]'
      }
    };
    component.updateHeight({});

  });

  it('should run #openAdditionalServiceModal()', async () => {
    component.dialogService = component.dialogService || {};
    component.dialogService.open = jest.fn();
    component.openAdditionalServiceModal({});
    expect(component.dialogService.open).toHaveBeenCalled();
  });

  it('should run #startPPCFlow()', async () => {
    component.commonData = component.commonData || {};
    component.commonData.agentInfo = {
      dealerCode: '[object Object]'
    };
    component.ramPermissionService = component.ramPermissionService || {};
    component.ramPermissionService.isPermitted = jest.fn();
    component.dialogService = component.dialogService || {};
    component.dialogService.open = jest.fn();
    component.dealerCodeService = component.dealerCodeService || {};
    component.dealerCodeService.checkIfDealerCodeUpdated = jest.fn();
    component.changePlan = component.changePlan || {};
    component.changePlan.changePricePlan = jest.fn();
    await component.startPPCFlow({});
    expect(component.ramPermissionService.isPermitted).toHaveBeenCalled();
    expect(component.dialogService.open).toHaveBeenCalled();
    expect(component.dealerCodeService.checkIfDealerCodeUpdated).toHaveBeenCalled();
    expect(component.changePlan.changePricePlan).toHaveBeenCalled();
  });

  it('should run #handleBuyflow()', async () => {
    component.commonData = component.commonData || {};
    component.commonData.agentInfo = {
      dealerCode: '[object Object]'
    };
    component.commonData = component.commonData || {};
    component.commonData.accountSummary = {
      accountNumber: '[object Object]'
    };
    component.ramPermissionService = component.ramPermissionService || {};
    component.ramPermissionService.isPermitted = jest.fn();
    component.dialogService = component.dialogService || {};
    component.dialogService.open = jest.fn();
    component.processHup = component.processHup || {};
    component.processHup.handleDealerCodeChange = jest.fn();
    component.processHup = component.processHup || {};
    component.processHup.checkEligibility = jest.fn();
    component.processHup = component.processHup || {};
    component.processHup.upgradeHardware = jest.fn();
    await component.handleBuyflow({
      detail: {
        ctn: '[object Object]'
      }
    });
    expect(component.ramPermissionService.isPermitted).toHaveBeenCalled();
    expect(component.dialogService.open).toHaveBeenCalled();
    expect(component.processHup.handleDealerCodeChange).toHaveBeenCalled();
    expect(component.processHup.checkEligibility).toHaveBeenCalled();
    expect(component.processHup.upgradeHardware).toHaveBeenCalled();
  });

  it('should run #goToIgniteTV()', async () => {
    component.el = component.el || {};
    component.el.nativeElement = {
      dispatchEvent: jest.fn()
    };
    component.goToIgniteTV({});

  });

});
