import { trigger, state, animate, transition, style } from '@angular/animations';

export const contentAnimation =
    trigger('contentAnimation', [
        transition(':leave', [
            style({ transform: 'translateX(0%)', opacity: 1 }),
            animate('.3s', style({ transform: 'translateX(100%)', opacity: 0 }))
        ]),
        transition(':enter', [
            style({ transform: 'translateX(100%)'}),
            animate('.3s', style({ transform: 'translateX(0%)'}))
        ]),
    ]);