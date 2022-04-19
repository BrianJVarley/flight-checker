/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import { LoggerService } from './logger.service';
import { DefaultLogFormatterService } from './default-log-formatter.service';
import { LogFormatterService } from './log-formatter.service';

// imports: [ LoggerModule.forRoot({ ... }) ]

const defaultFormatterConfig = [
  {
    provide: LogFormatterService,
    useClass: DefaultLogFormatterService,
  },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  providers: [
    LoggerService
  ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {

  // Setup
  static forRoot(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        !config.logFormatterType // Enable default implementation of service and also ability to override
          ? defaultFormatterConfig
          : { provide: LogFormatterService, useClass: config.logFormatterType },
      ],
    };
  }

}
