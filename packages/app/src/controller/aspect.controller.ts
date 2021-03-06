import { BaseController, Path, Param, Query, Get, Post, Around, Service, Result,Middleware } from '@umajs/core';
import { middleware } from '../aspect/mw.aspect';
import { DecoratorA, DecoratorB, AroundB } from '../decorator/Test';

@DecoratorA()
@DecoratorB()
@Around(AroundB)
export default class Index extends BaseController {

    @Middleware(middleware)
    @Path('/aspect')
    index() {
        return this.view('index.html', {
            frameName: this.getFrameName(),
        });
    }

    getFrameName() {
        return '「Umajs」';
    }
}
