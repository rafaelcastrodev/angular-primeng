'use strict';
(self.webpackChunkangular_primeng =
    self.webpackChunkangular_primeng || []).push([
    [852],
    {
        5852: (m, a, o) => {
            o.r(a), o.d(a, { NotFoundModule: () => u });
            var r = o(3760),
                i = o(177),
                n = o(3953);
            let c = (() => {
                    class t {
                        static #t = (this.ɵfac = function (s) {
                            return new (s || t)();
                        });
                        static #n = (this.ɵcmp = n.VBU({
                            type: t,
                            selectors: [['mmm-not-found']],
                            decls: 6,
                            vars: 0,
                            consts: [
                                [2, 'display', 'grid', 'place-items', 'center'],
                                [
                                    'src',
                                    './assets/images/undraw_404.svg',
                                    2,
                                    'width',
                                    '80%',
                                    'max-width',
                                    '400px',
                                ],
                            ],
                            template: function (s, d) {
                                1 & s &&
                                    (n.j41(0, 'div', 0),
                                    n.nrm(1, 'img', 1)(2, 'br')(3, 'br'),
                                    n.j41(4, 'strong'),
                                    n.EFF(5, 'Error 404: Page not found'),
                                    n.k0s()());
                            },
                            encapsulation: 2,
                        }));
                    }
                    return t;
                })(),
                u = (() => {
                    class t {
                        static #t = (this.ɵfac = function (s) {
                            return new (s || t)();
                        });
                        static #n = (this.ɵmod = n.$C({ type: t }));
                        static #o = (this.ɵinj = n.G2t({
                            imports: [
                                i.MD,
                                r.iI.forChild([{ path: '', component: c }]),
                            ],
                        }));
                    }
                    return t;
                })();
        },
    },
]);
