'use strict';
(self.webpackChunkangular_primeng =
    self.webpackChunkangular_primeng || []).push([
    [698],
    {
        5305: (y, f, o) => {
            o.d(f, { q: () => m });
            const m = {
                DASHBOARD: {
                    label: 'Dashboard',
                    url: 'dashboard',
                    icon: 'pi pi-fw pi-home',
                    allowed_roles: [],
                },
                HOME: {
                    label: 'Home',
                    url: 'home',
                    icon: 'pi pi-fw pi-home',
                    allowed_roles: [],
                },
                MANAGEMENT: {
                    label: 'Management',
                    url: 'management',
                    icon: 'pi pi-fw pi-building-columns',
                    allowed_roles: [],
                },
                USERS: {
                    label: 'Users',
                    url: 'users',
                    icon: 'pi pi-fw pi-users',
                    allowed_roles: [],
                },
            };
        },
        2698: (y, f, o) => {
            o.r(f), o.d(f, { MainModule: () => ne });
            var p = o(177),
                u = o(3760),
                v = o(467),
                e = o(3953),
                m = o(9902);
            const h = {
                SIGNOUT: {
                    action: 'signout',
                    label: 'Exit',
                    title: 'Exit the application',
                    icon: 'pi pi-sign-out',
                },
            };
            var l = o(5305),
                S = o(1413),
                g = o(3445);
            let b = (() => {
                class i {
                    constructor() {
                        (this._menuSource = new S.B()),
                            (this._resetSource = new S.B()),
                            (this._authService = (0, e.WQX)(g.u)),
                            (this.menuSource$ =
                                this._menuSource.asObservable()),
                            (this.resetSource$ =
                                this._resetSource.asObservable());
                    }
                    onMenuStateChange(t) {
                        this._menuSource.next(t);
                    }
                    reset() {
                        this._resetSource.next(!0);
                    }
                    getTopbarMenuItems() {
                        return [h.SIGNOUT];
                    }
                    getSideMenuItems() {
                        return [
                            {
                                allowed_roles: l.q.HOME.allowed_roles,
                                label: l.q.HOME.label,
                                items: [
                                    {
                                        allowed_roles:
                                            l.q.DASHBOARD.allowed_roles,
                                        label: l.q.DASHBOARD.label,
                                        icon: l.q.DASHBOARD.icon,
                                        routerLink: [`${l.q.DASHBOARD.url}`],
                                    },
                                ],
                            },
                            {
                                allowed_roles: l.q.MANAGEMENT.allowed_roles,
                                label: l.q.MANAGEMENT.label,
                                items: [
                                    {
                                        allowed_roles: l.q.USERS.allowed_roles,
                                        label: l.q.USERS.label,
                                        icon: l.q.USERS.icon,
                                        routerLink: [`${l.q.USERS.url}`],
                                    },
                                ],
                            },
                            {
                                allowed_roles: [],
                                label: '',
                                items: [
                                    {
                                        allowed_roles: [],
                                        label: h.SIGNOUT.label,
                                        icon: h.SIGNOUT.icon,
                                        action: h.SIGNOUT.action,
                                        title: h.SIGNOUT.title,
                                        command: () =>
                                            this._authService.confirmSignOut(),
                                    },
                                ],
                            },
                        ];
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || i)();
                    });
                    static #t = (this.ɵprov = e.jDH({
                        token: i,
                        factory: i.ɵfac,
                        providedIn: 'root',
                    }));
                }
                return i;
            })();
            var d = o(9969),
                M = o(5964),
                R = o(563);
            const T = ['app-menuitem', ''],
                G = () => ({
                    paths: 'exact',
                    queryParams: 'ignored',
                    matrixParams: 'ignored',
                    fragment: 'ignored',
                });
            function I(i, c) {
                if ((1 & i && (e.j41(0, 'div', 4), e.EFF(1), e.k0s()), 2 & i)) {
                    const t = e.XpG();
                    e.R7$(), e.SpI(' ', t.item.label, ' ');
                }
            }
            function B(i, c) {
                1 & i && e.nrm(0, 'i', 9);
            }
            function U(i, c) {
                if (1 & i) {
                    const t = e.RV6();
                    e.j41(0, 'a', 5),
                        e.bIt('click', function (s) {
                            e.eBV(t);
                            const a = e.XpG();
                            return e.Njj(a.itemClick(s));
                        }),
                        e.nrm(1, 'i', 6),
                        e.j41(2, 'span', 7),
                        e.EFF(3),
                        e.k0s(),
                        e.DNE(4, B, 1, 0, 'i', 8),
                        e.k0s();
                }
                if (2 & i) {
                    const t = e.XpG();
                    e.Y8G('ngClass', t.item.class),
                        e.BMQ(
                            'href',
                            t.item.url,
                            e.B4B
                        )('target', t.item.target),
                        e.R7$(),
                        e.Y8G('ngClass', t.item.icon),
                        e.R7$(2),
                        e.JRh(t.item.label),
                        e.R7$(),
                        e.Y8G('ngIf', t.item.items);
                }
            }
            function E(i, c) {
                1 & i && e.nrm(0, 'i', 9);
            }
            function L(i, c) {
                if (1 & i) {
                    const t = e.RV6();
                    e.j41(0, 'a', 10),
                        e.bIt('click', function (s) {
                            e.eBV(t);
                            const a = e.XpG();
                            return e.Njj(a.itemClick(s));
                        }),
                        e.nrm(1, 'i', 6),
                        e.j41(2, 'span', 7),
                        e.EFF(3),
                        e.k0s(),
                        e.DNE(4, E, 1, 0, 'i', 8),
                        e.k0s();
                }
                if (2 & i) {
                    const t = e.XpG();
                    e.Y8G('ngClass', t.item.class)(
                        'routerLink',
                        t.item.routerLink
                    )(
                        'routerLinkActiveOptions',
                        t.item.routerLinkActiveOptions || e.lJ4(14, G)
                    )('fragment', t.item.fragment)(
                        'queryParamsHandling',
                        t.item.queryParamsHandling
                    )('preserveFragment', t.item.preserveFragment)(
                        'skipLocationChange',
                        t.item.skipLocationChange
                    )('replaceUrl', t.item.replaceUrl)('state', t.item.state)(
                        'queryParams',
                        t.item.queryParams
                    ),
                        e.BMQ('target', t.item.target),
                        e.R7$(),
                        e.Y8G('ngClass', t.item.icon),
                        e.R7$(2),
                        e.JRh(t.item.label),
                        e.R7$(),
                        e.Y8G('ngIf', t.item.items);
                }
            }
            function x(i, c) {
                if ((1 & i && (e.qex(0), e.nrm(1, 'li', 12), e.bVm()), 2 & i)) {
                    const t = e.XpG(),
                        n = t.$implicit,
                        s = t.index,
                        a = e.XpG(2);
                    e.R7$(),
                        e.HbH(n.badgeClass),
                        e.Y8G('item', n)('index', s)('parentKey', a.key);
                }
            }
            function D(i, c) {
                if ((1 & i && e.DNE(0, x, 2, 5, 'ng-container', 3), 2 & i)) {
                    const t = c.$implicit,
                        n = e.XpG(2);
                    e.Y8G('ngIf', n.hasPermission(t));
                }
            }
            function F(i, c) {
                if (
                    (1 & i &&
                        (e.j41(0, 'ul'),
                        e.DNE(1, D, 1, 1, 'ng-template', 11),
                        e.k0s()),
                    2 & i)
                ) {
                    const t = e.XpG();
                    e.Y8G('@children', t.submenuAnimation),
                        e.R7$(),
                        e.Y8G('ngForOf', t.item.items);
                }
            }
            let N = (() => {
                class i {
                    constructor(t, n, s, a) {
                        (this.layoutService = t),
                            (this.router = n),
                            (this._menuService = s),
                            (this._authService = a),
                            (this.active = !1),
                            (this.key = ''),
                            (this.menuSourceSubscription =
                                this._menuService.menuSource$.subscribe((r) => {
                                    Promise.resolve(null).then(() => {
                                        r.routeEvent
                                            ? (this.active = !(
                                                  r.key !== this.key &&
                                                  !r.key.startsWith(
                                                      this.key + '-'
                                                  )
                                              ))
                                            : r.key !== this.key &&
                                              !r.key.startsWith(
                                                  this.key + '-'
                                              ) &&
                                              (this.active = !1);
                                    });
                                })),
                            (this.menuResetSubscription =
                                this._menuService.resetSource$.subscribe(() => {
                                    this.active = !1;
                                })),
                            this.router.events
                                .pipe((0, M.p)((r) => r instanceof u.wF))
                                .subscribe((r) => {
                                    this.item.routerLink &&
                                        this.updateActiveStateFromRoute();
                                });
                    }
                    get submenuAnimation() {
                        return this.root || this.active
                            ? 'expanded'
                            : 'collapsed';
                    }
                    get activeClass() {
                        return this.active && !this.root;
                    }
                    ngOnInit() {
                        (this.key = this.parentKey
                            ? this.parentKey + '-' + this.index
                            : String(this.index)),
                            this.item.routerLink &&
                                this.updateActiveStateFromRoute();
                    }
                    ngOnDestroy() {
                        this.menuSourceSubscription &&
                            this.menuSourceSubscription.unsubscribe(),
                            this.menuResetSubscription &&
                                this.menuResetSubscription.unsubscribe();
                    }
                    hasPermission(t) {
                        const n = 0 === t.allowed_roles.length,
                            s = t.allowed_roles.includes(
                                this.currentAuthUser?.role.slug
                            );
                        return n || s;
                    }
                    updateActiveStateFromRoute() {
                        this.router.isActive(this.item.routerLink[0], {
                            paths: 'exact',
                            queryParams: 'ignored',
                            matrixParams: 'ignored',
                            fragment: 'ignored',
                        }) &&
                            this._menuService.onMenuStateChange({
                                key: this.key,
                                routeEvent: !0,
                            });
                    }
                    itemClick(t) {
                        this.item.disabled
                            ? t.preventDefault()
                            : (this.item.command &&
                                  this.item.command({
                                      originalEvent: t,
                                      item: this.item,
                                  }),
                              this.item.items && (this.active = !this.active),
                              this._menuService.onMenuStateChange({
                                  key: this.key,
                              }));
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || i)(
                            e.rXU(m.Y),
                            e.rXU(u.Ix),
                            e.rXU(b),
                            e.rXU(g.u)
                        );
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: i,
                        selectors: [['', 'app-menuitem', '']],
                        hostVars: 4,
                        hostBindings: function (n, s) {
                            2 & n &&
                                e.AVh('layout-root-menuitem', s.root)(
                                    'active-menuitem',
                                    s.activeClass
                                );
                        },
                        inputs: {
                            item: 'item',
                            index: 'index',
                            root: 'root',
                            parentKey: 'parentKey',
                        },
                        attrs: T,
                        decls: 5,
                        vars: 4,
                        consts: [
                            ['class', 'layout-menuitem-root-text', 4, 'ngIf'],
                            [
                                'tabindex',
                                '0',
                                'pRipple',
                                '',
                                3,
                                'ngClass',
                                'click',
                                4,
                                'ngIf',
                            ],
                            [
                                'routerLinkActive',
                                'active-route',
                                'tabindex',
                                '0',
                                'pRipple',
                                '',
                                3,
                                'ngClass',
                                'routerLink',
                                'routerLinkActiveOptions',
                                'fragment',
                                'queryParamsHandling',
                                'preserveFragment',
                                'skipLocationChange',
                                'replaceUrl',
                                'state',
                                'queryParams',
                                'click',
                                4,
                                'ngIf',
                            ],
                            [4, 'ngIf'],
                            [1, 'layout-menuitem-root-text'],
                            [
                                'tabindex',
                                '0',
                                'pRipple',
                                '',
                                3,
                                'click',
                                'ngClass',
                            ],
                            [1, 'layout-menuitem-icon', 3, 'ngClass'],
                            [1, 'layout-menuitem-text'],
                            [
                                'class',
                                'pi pi-fw pi-angle-down layout-submenu-toggler',
                                4,
                                'ngIf',
                            ],
                            [
                                1,
                                'pi',
                                'pi-fw',
                                'pi-angle-down',
                                'layout-submenu-toggler',
                            ],
                            [
                                'routerLinkActive',
                                'active-route',
                                'tabindex',
                                '0',
                                'pRipple',
                                '',
                                3,
                                'click',
                                'ngClass',
                                'routerLink',
                                'routerLinkActiveOptions',
                                'fragment',
                                'queryParamsHandling',
                                'preserveFragment',
                                'skipLocationChange',
                                'replaceUrl',
                                'state',
                                'queryParams',
                            ],
                            ['ngFor', '', 3, 'ngForOf'],
                            [
                                'app-menuitem',
                                '',
                                3,
                                'item',
                                'index',
                                'parentKey',
                            ],
                        ],
                        template: function (n, s) {
                            1 & n &&
                                (e.qex(0),
                                e.DNE(1, I, 2, 1, 'div', 0)(2, U, 5, 6, 'a', 1)(
                                    3,
                                    L,
                                    5,
                                    15,
                                    'a',
                                    2
                                )(4, F, 2, 2, 'ul', 3),
                                e.bVm()),
                                2 & n &&
                                    (e.R7$(),
                                    e.Y8G(
                                        'ngIf',
                                        s.root &&
                                            s.hasPermission(s.item) &&
                                            !1 !== s.item.visible
                                    ),
                                    e.R7$(),
                                    e.Y8G(
                                        'ngIf',
                                        s.hasPermission(s.item) &&
                                            (!s.item.routerLink ||
                                                s.item.items) &&
                                            !1 !== s.item.visible
                                    ),
                                    e.R7$(),
                                    e.Y8G(
                                        'ngIf',
                                        s.hasPermission(s.item) &&
                                            s.item.routerLink &&
                                            !s.item.items &&
                                            !1 !== s.item.visible
                                    ),
                                    e.R7$(),
                                    e.Y8G(
                                        'ngIf',
                                        s.item.items && !1 !== s.item.visible
                                    ));
                        },
                        dependencies: [p.YU, p.Sq, p.bT, u.Wk, u.wQ, R.n, i],
                        encapsulation: 2,
                        data: {
                            animation: [
                                (0, d.hZ)('children', [
                                    (0, d.wk)(
                                        'collapsed',
                                        (0, d.iF)({ height: '0' })
                                    ),
                                    (0, d.wk)(
                                        'expanded',
                                        (0, d.iF)({ height: '*' })
                                    ),
                                    (0, d.kY)(
                                        'collapsed <=> expanded',
                                        (0, d.i0)(
                                            '400ms cubic-bezier(0.86, 0, 0.07, 1)'
                                        )
                                    ),
                                ]),
                            ],
                        },
                    }));
                }
                return i;
            })();
            function $(i, c) {
                if ((1 & i && e.nrm(0, 'li', 4), 2 & i)) {
                    const t = e.XpG(),
                        s = t.index;
                    e.Y8G('item', t.$implicit)('index', s)('root', !0);
                }
            }
            function j(i, c) {
                1 & i && e.nrm(0, 'li', 5);
            }
            function w(i, c) {
                if (
                    (1 & i &&
                        (e.qex(0),
                        e.DNE(1, $, 1, 3, 'li', 2)(2, j, 1, 0, 'li', 3),
                        e.bVm()),
                    2 & i)
                ) {
                    const t = c.$implicit;
                    e.R7$(),
                        e.Y8G('ngIf', !t.separator),
                        e.R7$(),
                        e.Y8G('ngIf', t.separator);
                }
            }
            let Y = (() => {
                    class i {
                        constructor(t, n) {
                            (this.layoutService = t),
                                (this._menuService = n),
                                (this.menuItems = []);
                        }
                        ngOnInit() {
                            this.menuItems =
                                this._menuService.getSideMenuItems();
                        }
                        static #e = (this.ɵfac = function (n) {
                            return new (n || i)(e.rXU(m.Y), e.rXU(b));
                        });
                        static #t = (this.ɵcmp = e.VBU({
                            type: i,
                            selectors: [['app-menu']],
                            decls: 2,
                            vars: 1,
                            consts: [
                                [1, 'layout-menu'],
                                [4, 'ngFor', 'ngForOf'],
                                [
                                    'app-menuitem',
                                    '',
                                    3,
                                    'item',
                                    'index',
                                    'root',
                                    4,
                                    'ngIf',
                                ],
                                ['class', 'menu-separator', 4, 'ngIf'],
                                [
                                    'app-menuitem',
                                    '',
                                    3,
                                    'item',
                                    'index',
                                    'root',
                                ],
                                [1, 'menu-separator'],
                            ],
                            template: function (n, s) {
                                1 & n &&
                                    (e.j41(0, 'ul', 0),
                                    e.DNE(1, w, 3, 2, 'ng-container', 1),
                                    e.k0s()),
                                    2 & n &&
                                        (e.R7$(),
                                        e.Y8G('ngForOf', s.menuItems));
                            },
                            dependencies: [p.Sq, p.bT, N],
                            encapsulation: 2,
                        }));
                    }
                    return i;
                })(),
                k = (() => {
                    class i {
                        constructor(t, n) {
                            (this.layoutService = t), (this.el = n);
                        }
                        static #e = (this.ɵfac = function (n) {
                            return new (n || i)(e.rXU(m.Y), e.rXU(e.aKT));
                        });
                        static #t = (this.ɵcmp = e.VBU({
                            type: i,
                            selectors: [['app-sidebar']],
                            decls: 1,
                            vars: 0,
                            template: function (n, s) {
                                1 & n && e.nrm(0, 'app-menu');
                            },
                            dependencies: [Y],
                            encapsulation: 2,
                        }));
                    }
                    return i;
                })();
            const P = ['menubutton'],
                X = ['topbarmenubutton'],
                V = ['topbarmenu'],
                H = () => ['/main'],
                K = (i) => ({ 'layout-topbar-menu-mobile-active': i });
            function Q(i, c) {
                if (1 & i) {
                    const t = e.RV6();
                    e.j41(0, 'button', 12),
                        e.bIt('click', function () {
                            const s = e.eBV(t).$implicit,
                                a = e.XpG();
                            return e.Njj(a.clickOnTopMenuItem(s));
                        }),
                        e.nrm(1, 'i'),
                        e.j41(2, 'span'),
                        e.EFF(3),
                        e.k0s()();
                }
                if (2 & i) {
                    const t = c.$implicit;
                    e.Y8G('title', t.title)(
                        'routerLink',
                        t.routerLink ? t.routerLink : null
                    ),
                        e.R7$(),
                        e.HbH(t.icon),
                        e.R7$(2),
                        e.JRh(t.label);
                }
            }
            let _ = (() => {
                class i {
                    constructor(t, n, s) {
                        (this.layoutService = t),
                            (this._menuService = n),
                            (this._authService = s);
                    }
                    ngOnInit() {
                        this.topbarMenuItems =
                            this._menuService.getTopbarMenuItems();
                    }
                    clickOnTopMenuItem(t) {
                        t.action === h.SIGNOUT.action &&
                            this._authService.confirmSignOut();
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || i)(e.rXU(m.Y), e.rXU(b), e.rXU(g.u));
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: i,
                        selectors: [['app-topbar']],
                        viewQuery: function (n, s) {
                            if (
                                (1 & n &&
                                    (e.GBs(P, 5), e.GBs(X, 5), e.GBs(V, 5)),
                                2 & n)
                            ) {
                                let a;
                                e.mGM((a = e.lsd())) &&
                                    (s.menuButton = a.first),
                                    e.mGM((a = e.lsd())) &&
                                        (s.topbarMenuButton = a.first),
                                    e.mGM((a = e.lsd())) && (s.menu = a.first);
                            }
                        },
                        decls: 13,
                        vars: 5,
                        consts: [
                            ['menubutton', ''],
                            ['topbarmenubutton', ''],
                            ['topbarmenu', ''],
                            [1, 'layout-topbar'],
                            [
                                'title',
                                'Logo',
                                1,
                                'layout-topbar-logo',
                                'w-auto',
                                'mr-10',
                                3,
                                'routerLink',
                            ],
                            [
                                'src',
                                './assets/images/undraw_logo.svg',
                                'alt',
                                'Logo ',
                                1,
                                'h-4rem',
                                'm-0',
                            ],
                            [
                                1,
                                'p-link',
                                'layout-menu-button',
                                'layout-topbar-button',
                                3,
                                'click',
                            ],
                            [1, 'pi', 'pi-bars'],
                            [
                                1,
                                'p-link',
                                'layout-topbar-menu-button',
                                'layout-topbar-button',
                                3,
                                'click',
                            ],
                            [1, 'pi', 'pi-ellipsis-v'],
                            [1, 'layout-topbar-menu', 3, 'ngClass'],
                            [
                                1,
                                'p-link',
                                'layout-topbar-button',
                                3,
                                'title',
                                'routerLink',
                            ],
                            [
                                1,
                                'p-link',
                                'layout-topbar-button',
                                3,
                                'click',
                                'title',
                                'routerLink',
                            ],
                        ],
                        template: function (n, s) {
                            if (1 & n) {
                                const a = e.RV6();
                                e.j41(0, 'div', 3)(1, 'a', 4),
                                    e.nrm(2, 'img', 5),
                                    e.k0s(),
                                    e.j41(3, 'button', 6, 0),
                                    e.bIt('click', function () {
                                        return (
                                            e.eBV(a),
                                            e.Njj(
                                                s.layoutService.onMenuToggle()
                                            )
                                        );
                                    }),
                                    e.nrm(5, 'i', 7),
                                    e.k0s(),
                                    e.j41(6, 'button', 8, 1),
                                    e.bIt('click', function () {
                                        return (
                                            e.eBV(a),
                                            e.Njj(
                                                s.layoutService.showProfileSidebar()
                                            )
                                        );
                                    }),
                                    e.nrm(8, 'i', 9),
                                    e.k0s(),
                                    e.j41(9, 'div', 10, 2),
                                    e.Z7z(11, Q, 4, 6, 'button', 11, e.fX1),
                                    e.k0s()();
                            }
                            2 & n &&
                                (e.R7$(),
                                e.Y8G('routerLink', e.lJ4(2, H)),
                                e.R7$(8),
                                e.Y8G(
                                    'ngClass',
                                    e.eq3(
                                        3,
                                        K,
                                        s.layoutService.state
                                            .profileSidebarVisible
                                    )
                                ),
                                e.R7$(2),
                                e.Dyx(s.topbarMenuItems));
                        },
                        dependencies: [p.YU, u.Wk],
                        encapsulation: 2,
                    }));
                }
                return i;
            })();
            var A = o(7817),
                W = o(9998);
            let q = (() => {
                class i {
                    constructor(t) {
                        this.layoutService = t;
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || i)(e.rXU(m.Y));
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: i,
                        selectors: [['app-footer']],
                        decls: 6,
                        vars: 0,
                        consts: [
                            [1, 'layout-footer'],
                            [
                                'src',
                                './assets/images/undraw_logo.svg',
                                'alt',
                                'Logo',
                                'height',
                                '20',
                                1,
                                'mr-2',
                            ],
                            [1, 'block'],
                            [1, 'font-medium', 'ml-2'],
                        ],
                        template: function (n, s) {
                            1 & n &&
                                (e.j41(0, 'div', 0),
                                e.nrm(1, 'img', 1),
                                e.j41(2, 'small', 2),
                                e.EFF(3, ' by '),
                                e.j41(4, 'span', 3),
                                e.EFF(5, 'Rafael de Castro'),
                                e.k0s()()());
                        },
                        encapsulation: 2,
                    }));
                }
                return i;
            })();
            function J(i, c) {
                if (
                    (1 & i &&
                        (e.j41(0, 'div', 0),
                        e.nrm(1, 'app-topbar'),
                        e.j41(2, 'div', 1),
                        e.nrm(3, 'app-sidebar'),
                        e.k0s(),
                        e.j41(4, 'div', 2),
                        e.nrm(5, 'p-toast'),
                        e.j41(6, 'div', 3)(7, 'div', 4)(8, 'div', 5),
                        e.nrm(9, 'router-outlet'),
                        e.k0s()()(),
                        e.nrm(10, 'app-footer'),
                        e.k0s()()),
                    2 & i)
                ) {
                    const t = e.XpG();
                    e.Y8G('ngClass', t.containerClass);
                }
            }
            let z = (() => {
                class i {
                    constructor(t, n, s, a) {
                        (this.layoutService = t),
                            (this.renderer = n),
                            (this.router = s),
                            (this._authService = a),
                            (this.loadingBasicResources = !0),
                            (this.overlayMenuOpenSubscription =
                                this.layoutService.overlayOpen$.subscribe(
                                    () => {
                                        this.menuOutsideClickListener ||
                                            (this.menuOutsideClickListener =
                                                this.renderer.listen(
                                                    'document',
                                                    'click',
                                                    (r) => {
                                                        !(
                                                            this.appSidebar.el.nativeElement.isSameNode(
                                                                r.target
                                                            ) ||
                                                            this.appSidebar.el.nativeElement.contains(
                                                                r.target
                                                            ) ||
                                                            this.appTopbar.menuButton.nativeElement.isSameNode(
                                                                r.target
                                                            ) ||
                                                            this.appTopbar.menuButton.nativeElement.contains(
                                                                r.target
                                                            )
                                                        ) && this.hideMenu();
                                                    }
                                                )),
                                            this
                                                .profileMenuOutsideClickListener ||
                                                (this.profileMenuOutsideClickListener =
                                                    this.renderer.listen(
                                                        'document',
                                                        'click',
                                                        (r) => {
                                                            !(
                                                                this.appTopbar.menu.nativeElement.isSameNode(
                                                                    r.target
                                                                ) ||
                                                                this.appTopbar.menu.nativeElement.contains(
                                                                    r.target
                                                                ) ||
                                                                this.appTopbar.topbarMenuButton.nativeElement.isSameNode(
                                                                    r.target
                                                                ) ||
                                                                this.appTopbar.topbarMenuButton.nativeElement.contains(
                                                                    r.target
                                                                )
                                                            ) &&
                                                                this.hideProfileMenu();
                                                        }
                                                    )),
                                            this.layoutService.state
                                                .staticMenuMobileActive &&
                                                this.blockBodyScroll();
                                    }
                                )),
                            this.router.events
                                .pipe((0, M.p)((r) => r instanceof u.wF))
                                .subscribe(() => {
                                    this.hideMenu(), this.hideProfileMenu();
                                });
                    }
                    get containerClass() {
                        return {
                            'layout-theme-light':
                                'light' ===
                                this.layoutService.config.colorScheme,
                            'layout-theme-dark':
                                'dark' ===
                                this.layoutService.config.colorScheme,
                            'layout-overlay':
                                'overlay' ===
                                this.layoutService.config.menuMode,
                            'layout-static':
                                'static' === this.layoutService.config.menuMode,
                            'layout-static-inactive':
                                this.layoutService.state
                                    .staticMenuDesktopInactive &&
                                'static' === this.layoutService.config.menuMode,
                            'layout-overlay-active':
                                this.layoutService.state.overlayMenuActive,
                            'layout-mobile-active':
                                this.layoutService.state.staticMenuMobileActive,
                            'p-input-filled':
                                'filled' ===
                                this.layoutService.config.inputStyle,
                            'p-ripple-disabled':
                                !this.layoutService.config.ripple,
                        };
                    }
                    ngOnInit() {
                        this.getResources();
                    }
                    ngOnDestroy() {
                        this.overlayMenuOpenSubscription &&
                            this.overlayMenuOpenSubscription.unsubscribe(),
                            this.menuOutsideClickListener &&
                                this.menuOutsideClickListener();
                    }
                    hideMenu() {
                        (this.layoutService.state.overlayMenuActive = !1),
                            (this.layoutService.state.staticMenuMobileActive =
                                !1),
                            (this.layoutService.state.menuHoverActive = !1),
                            this.menuOutsideClickListener &&
                                (this.menuOutsideClickListener(),
                                (this.menuOutsideClickListener = null)),
                            this.unblockBodyScroll();
                    }
                    hideProfileMenu() {
                        (this.layoutService.state.profileSidebarVisible = !1),
                            this.profileMenuOutsideClickListener &&
                                (this.profileMenuOutsideClickListener(),
                                (this.profileMenuOutsideClickListener = null));
                    }
                    blockBodyScroll() {
                        document.body.classList
                            ? document.body.classList.add('blocked-scroll')
                            : (document.body.className += ' blocked-scroll');
                    }
                    unblockBodyScroll() {
                        document.body.classList
                            ? document.body.classList.remove('blocked-scroll')
                            : (document.body.className =
                                  document.body.className.replace(
                                      new RegExp(
                                          '(^|\\b)' +
                                              'blocked-scroll'
                                                  .split(' ')
                                                  .join('|') +
                                              '(\\b|$)',
                                          'gi'
                                      ),
                                      ' '
                                  ));
                    }
                    getResources() {
                        var t = this;
                        return (0, v.A)(function* () {
                            try {
                                A.x.present(), (t.loadingBasicResources = !0);
                            } catch (n) {
                                console.error(n);
                            } finally {
                                (t.loadingBasicResources = !1), A.x.dismiss();
                            }
                        })();
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || i)(
                            e.rXU(m.Y),
                            e.rXU(e.sFG),
                            e.rXU(u.Ix),
                            e.rXU(g.u)
                        );
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: i,
                        selectors: [['app-main']],
                        viewQuery: function (n, s) {
                            if ((1 & n && (e.GBs(k, 5), e.GBs(_, 5)), 2 & n)) {
                                let a;
                                e.mGM((a = e.lsd())) &&
                                    (s.appSidebar = a.first),
                                    e.mGM((a = e.lsd())) &&
                                        (s.appTopbar = a.first);
                            }
                        },
                        decls: 1,
                        vars: 1,
                        consts: [
                            [1, 'layout-wrapper', 3, 'ngClass'],
                            [1, 'layout-sidebar'],
                            [1, 'layout-main-container'],
                            [1, 'layout-main'],
                            [1, 'grid'],
                            [1, 'col-12'],
                        ],
                        template: function (n, s) {
                            1 & n && e.DNE(0, J, 11, 1, 'div', 0),
                                2 & n &&
                                    e.vxM(s.loadingBasicResources ? -1 : 0);
                        },
                        dependencies: [u.n3, p.YU, W.y8, _, q, k],
                        encapsulation: 2,
                    }));
                }
                return i;
            })();
            var Z = o(7673);
            o(2781);
            const C = (i) => (0, Z.of)(!0),
                te = u.iI.forChild([
                    {
                        path: '',
                        component: z,
                        children: [
                            {
                                path: '',
                                redirectTo: l.q.DASHBOARD.url,
                                pathMatch: 'full',
                            },
                            {
                                path: l.q.DASHBOARD.url,
                                loadChildren: () =>
                                    o
                                        .e(811)
                                        .then(o.bind(o, 7811))
                                        .then((i) => i.DashboardModule),
                                canActivate: [C],
                            },
                            {
                                path: l.q.USERS.url,
                                loadChildren: () =>
                                    Promise.all([o.e(76), o.e(991)])
                                        .then(o.bind(o, 4991))
                                        .then((i) => i.UsersModule),
                                canActivate: [C],
                            },
                        ],
                    },
                ]);
            var ie = o(9627);
            let ne = (() => {
                class i {
                    static #e = (this.ɵfac = function (n) {
                        return new (n || i)();
                    });
                    static #t = (this.ɵmod = e.$C({ type: i }));
                    static #i = (this.ɵinj = e.G2t({
                        imports: [u.iI, p.MD, te, ie.G],
                    }));
                }
                return i;
            })();
        },
        9902: (y, f, o) => {
            o.d(f, { Y: () => v });
            var p = o(1413),
                u = o(3953);
            let v = (() => {
                class e {
                    constructor() {
                        (this.config = {
                            ripple: !1,
                            inputStyle: 'outlined',
                            menuMode: 'static',
                            colorScheme: 'light',
                            theme: 'lara-light-indigo',
                            scale: 14,
                        }),
                            (this.state = {
                                staticMenuDesktopInactive: !1,
                                overlayMenuActive: !1,
                                profileSidebarVisible: !1,
                                configSidebarVisible: !1,
                                staticMenuMobileActive: !1,
                                menuHoverActive: !1,
                            }),
                            (this.configUpdate = new p.B()),
                            (this.overlayOpen = new p.B()),
                            (this.configUpdate$ =
                                this.configUpdate.asObservable()),
                            (this.overlayOpen$ =
                                this.overlayOpen.asObservable());
                    }
                    onMenuToggle() {
                        this.isOverlay() &&
                            ((this.state.overlayMenuActive =
                                !this.state.overlayMenuActive),
                            this.state.overlayMenuActive &&
                                this.overlayOpen.next(null)),
                            this.isDesktop()
                                ? (this.state.staticMenuDesktopInactive =
                                      !this.state.staticMenuDesktopInactive)
                                : ((this.state.staticMenuMobileActive =
                                      !this.state.staticMenuMobileActive),
                                  this.state.staticMenuMobileActive &&
                                      this.overlayOpen.next(null));
                    }
                    showProfileSidebar() {
                        (this.state.profileSidebarVisible =
                            !this.state.profileSidebarVisible),
                            this.state.profileSidebarVisible &&
                                this.overlayOpen.next(null);
                    }
                    showConfigSidebar() {
                        this.state.configSidebarVisible = !0;
                    }
                    isOverlay() {
                        return 'overlay' === this.config.menuMode;
                    }
                    isDesktop() {
                        return window.innerWidth > 991;
                    }
                    isMobile() {
                        return !this.isDesktop();
                    }
                    onConfigUpdate() {
                        this.configUpdate.next(this.config);
                    }
                    static #e = (this.ɵfac = function (h) {
                        return new (h || e)();
                    });
                    static #t = (this.ɵprov = u.jDH({
                        token: e,
                        factory: e.ɵfac,
                        providedIn: 'root',
                    }));
                }
                return e;
            })();
        },
    },
]);
