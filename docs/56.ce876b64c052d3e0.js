'use strict';
(self.webpackChunkangular_primeng =
    self.webpackChunkangular_primeng || []).push([
    [56],
    {
        2056: (ae, S, a) => {
            a.r(S), a.d(S, { AuthModule: () => ie });
            var p = a(177),
                u = a(3760),
                s = a(4341),
                e = a(3953);
            let I = (() => {
                class t {
                    constructor() {}
                    static #e = (this.ɵfac = function (n) {
                        return new (n || t)();
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: t,
                        selectors: [['app-auth']],
                        decls: 4,
                        vars: 0,
                        consts: [
                            [1, 'flex', 'min-h-screen'],
                            [
                                1,
                                'flex',
                                'justify-content-center',
                                'align-items-center',
                                'mx-auto',
                                'relative',
                                'z-1',
                                'min-h-screen',
                                'w-full',
                                'max-w-xm',
                            ],
                            [1, 'fixed', 'z-0', 'min-h-screen', 'w-full'],
                        ],
                        template: function (n, r) {
                            1 & n &&
                                (e.j41(0, 'div', 0)(1, 'div', 1),
                                e.nrm(2, 'router-outlet'),
                                e.k0s(),
                                e.nrm(3, 'div', 2),
                                e.k0s());
                        },
                        dependencies: [u.n3],
                        encapsulation: 2,
                    }));
                }
                return t;
            })();
            const m = {
                SIGNIN: { label: 'Sign In', url: 'signin' },
                SIGNUP: { label: 'Sign Up', url: 'signup' },
                RECOVER_PASSWORD: {
                    label: 'Recover Password',
                    url: 'recover-password',
                },
                FORGOT_PASSWORD: {
                    label: 'Forgot Password',
                    url: 'forgot-password',
                },
                VALIDATE_OTP: { label: 'Validate OTP', url: 'validate-otp' },
            };
            var T = a(467),
                b = a(4797),
                C = a(7817),
                k = a(2781),
                y = a(3445);
            function P(t, i) {
                if (
                    (1 & t && (e.j41(0, 'div'), e.nrm(1, 'img', 2), e.k0s()),
                    2 & t)
                ) {
                    const o = e.XpG();
                    e.ZvI('', o.imageStyleClass, ' mx-auto mb-4'),
                        e.R7$(),
                        e.Y8G('src', o.imageUrl, e.B4B);
                }
            }
            function j(t, i) {
                if ((1 & t && e.nrm(0, 'div', 6), 2 & t)) {
                    const o = e.XpG(2);
                    e.Y8G('innerHTML', o.subHeader, e.npT);
                }
            }
            function G(t, i) {
                if (
                    (1 & t &&
                        (e.j41(0, 'div', 3),
                        e.nrm(1, 'div', 4),
                        e.DNE(2, j, 1, 1, 'div', 5),
                        e.k0s()),
                    2 & t)
                ) {
                    const o = e.XpG();
                    e.R7$(),
                        e.Y8G('innerHTML', o.header, e.npT),
                        e.R7$(),
                        e.Y8G('ngIf', o.subHeader);
                }
            }
            let h = (() => {
                class t {
                    static #e = (this.ɵfac = function (n) {
                        return new (n || t)();
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: t,
                        selectors: [['app-form-header']],
                        inputs: {
                            imageUrl: 'imageUrl',
                            imageStyleClass: 'imageStyleClass',
                            header: 'header',
                            subHeader: 'subHeader',
                        },
                        standalone: !0,
                        features: [e.aNF],
                        decls: 2,
                        vars: 2,
                        consts: [
                            [3, 'class', 4, 'ngIf'],
                            ['class', 'text-center text-900 my-5', 4, 'ngIf'],
                            [3, 'src'],
                            [1, 'text-center', 'text-900', 'my-5'],
                            [
                                1,
                                'text-3xl',
                                'font-medium',
                                'mb-2',
                                3,
                                'innerHTML',
                            ],
                            ['class', 'text-600', 3, 'innerHTML', 4, 'ngIf'],
                            [1, 'text-600', 3, 'innerHTML'],
                        ],
                        template: function (n, r) {
                            1 & n &&
                                e.DNE(0, P, 2, 4, 'div', 0)(
                                    1,
                                    G,
                                    3,
                                    2,
                                    'div',
                                    1
                                ),
                                2 & n &&
                                    (e.Y8G('ngIf', r.imageUrl),
                                    e.R7$(),
                                    e.Y8G('ngIf', r.header));
                        },
                        dependencies: [p.MD, p.bT],
                        encapsulation: 2,
                    }));
                }
                return t;
            })();
            var g = a(1141),
                v = a(2242),
                _ = a(4842);
            const N = (t) => [t];
            function E(t, i) {
                1 & t && (e.qex(0), e.EFF(1, ' Email is required. '), e.bVm());
            }
            function x(t, i) {
                1 & t &&
                    (e.qex(0), e.EFF(1, ' Invalid email format. '), e.bVm());
            }
            function $(t, i) {
                if (
                    (1 & t &&
                        (e.j41(0, 'small', 18),
                        e.DNE(1, E, 2, 0, 'ng-container', 19)(
                            2,
                            x,
                            2,
                            0,
                            'ng-container',
                            19
                        ),
                        e.k0s()),
                    2 & t)
                ) {
                    const o = e.XpG();
                    e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.username.hasError('required')
                        ),
                        e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.username.hasError('email')
                        );
                }
            }
            let V = (() => {
                class t {
                    constructor(o, n, r) {
                        (this._router = o),
                            (this._formBuilder = n),
                            (this._authService = r),
                            (this.appRoutesNames = b.q),
                            (this.authRoutesNames = m),
                            (this.signInForm = this._formBuilder.group({
                                username: ['', [s.k0.required, s.k0.email]],
                                password: [
                                    '',
                                    [s.k0.required, s.k0.minLength(8)],
                                ],
                            }));
                    }
                    get formControls() {
                        return this.signInForm.controls;
                    }
                    onSubmit() {
                        (this.isSubmitted = !0),
                            this.signInForm.invalid
                                ? (this.isSubmitted = !1)
                                : this.signInUser({
                                      username:
                                          this.formControls.username.value,
                                      password:
                                          this.formControls.password.value,
                                  });
                    }
                    showHidePassword() {
                        this.displayPassword = !this.displayPassword;
                    }
                    signInUser(o) {
                        var n = this;
                        return (0, T.A)(function* () {
                            try {
                                C.x.present(),
                                    yield n._authService.signIn(
                                        o.username,
                                        o.password
                                    ),
                                    yield n._router.navigate(['/'], {
                                        replaceUrl: !0,
                                    });
                            } catch (r) {
                                console.error(r),
                                    k.A.error(
                                        'Something unexpected happened!',
                                        r.error.detail ||
                                            'An error occurred on the server.'
                                    );
                            } finally {
                                C.x.dismiss(), (n.isSubmitted = !1);
                            }
                        })();
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || t)(
                            e.rXU(u.Ix),
                            e.rXU(s.ok),
                            e.rXU(y.u)
                        );
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: t,
                        selectors: [['app-signin']],
                        decls: 22,
                        vars: 18,
                        consts: [
                            [
                                1,
                                'auth-box',
                                'surface-card',
                                'w-screen',
                                'p-5',
                                'pt-6',
                                'sm:p-7',
                                'fadein',
                            ],
                            [
                                'imageUrl',
                                './assets/images/undraw_signin.svg',
                                'imageStyleClass',
                                'w-5',
                                3,
                                'header',
                            ],
                            [3, 'ngSubmit', 'formGroup'],
                            [1, 'field'],
                            ['for', 'username', 1, 'text-900'],
                            [1, 'p-input-icon-left'],
                            [1, 'pi', 'pi-envelope'],
                            [
                                'type',
                                'email',
                                'formControlName',
                                'username',
                                'id',
                                'username',
                                'pInputText',
                                '',
                                1,
                                'w-full',
                            ],
                            ['class', 'p-error', 4, 'ngIf'],
                            [1, 'field', 'mb-2', 'relative'],
                            ['for', 'password', 1, 'text-900', 'block'],
                            [1, 'p-input-icon-left', 'p-input-icon-right'],
                            [1, 'pi', 'pi-lock'],
                            [
                                'formControlName',
                                'password',
                                'id',
                                'password',
                                'pInputText',
                                '',
                                1,
                                'w-full',
                                3,
                                'type',
                            ],
                            [3, 'click', 'title'],
                            [1, 'block'],
                            [
                                1,
                                'text-blue-500',
                                'cursor-pointer',
                                3,
                                'routerLink',
                            ],
                            [
                                'pButton',
                                '',
                                'label',
                                'Login',
                                'iconPos',
                                'right',
                                1,
                                'w-full',
                                'mt-5',
                                3,
                                'icon',
                                'loading',
                                'disabled',
                            ],
                            [1, 'p-error'],
                            [4, 'ngIf'],
                        ],
                        template: function (n, r) {
                            1 & n &&
                                (e.j41(0, 'div', 0),
                                e.nrm(1, 'app-form-header', 1),
                                e.j41(2, 'form', 2),
                                e.bIt('ngSubmit', function () {
                                    return r.onSubmit();
                                }),
                                e.j41(3, 'div', 3)(4, 'label', 4),
                                e.EFF(5, 'Email'),
                                e.k0s(),
                                e.j41(6, 'div', 5),
                                e.nrm(7, 'i', 6)(8, 'input', 7),
                                e.k0s(),
                                e.DNE(9, $, 3, 2, 'small', 8),
                                e.nI1(10, 'formControlInvalid'),
                                e.k0s(),
                                e.j41(11, 'div', 9)(12, 'label', 10),
                                e.EFF(13, 'Password'),
                                e.k0s(),
                                e.j41(14, 'div', 11),
                                e.nrm(15, 'i', 12)(16, 'input', 13),
                                e.j41(17, 'i', 14),
                                e.bIt('click', function () {
                                    return r.showHidePassword();
                                }),
                                e.k0s()()(),
                                e.j41(18, 'div', 15)(19, 'a', 16),
                                e.EFF(20, 'Forgot your password?'),
                                e.k0s()(),
                                e.nrm(21, 'button', 17),
                                e.k0s()()),
                                2 & n &&
                                    (e.R7$(),
                                    e.Y8G(
                                        'header',
                                        r.authRoutesNames.SIGNIN.label
                                    ),
                                    e.R7$(),
                                    e.Y8G('formGroup', r.signInForm),
                                    e.R7$(7),
                                    e.Y8G(
                                        'ngIf',
                                        e.bMT(10, 14, r.formControls.username)
                                    ),
                                    e.R7$(7),
                                    e.FS9(
                                        'type',
                                        r.displayPassword ? 'text' : 'password'
                                    ),
                                    e.R7$(),
                                    e.ZvI(
                                        'pi pi-',
                                        r.displayPassword ? 'eye-slash' : 'eye',
                                        ' cursor-pointer'
                                    ),
                                    e.Mz_(
                                        'title',
                                        '',
                                        r.displayPassword ? 'Show' : 'Hide',
                                        ' password'
                                    ),
                                    e.R7$(2),
                                    e.Y8G(
                                        'routerLink',
                                        e.eq3(
                                            16,
                                            N,
                                            '/' +
                                                r.appRoutesNames.AUTH.url +
                                                '/' +
                                                r.authRoutesNames
                                                    .FORGOT_PASSWORD.url
                                        )
                                    ),
                                    e.R7$(2),
                                    e.Mz_(
                                        'icon',
                                        'pi ',
                                        r.signInForm.invalid
                                            ? ''
                                            : 'pi-chevron-right',
                                        ''
                                    ),
                                    e.Y8G('loading', r.isSubmitted)(
                                        'disabled',
                                        r.signInForm.invalid
                                    ));
                        },
                        dependencies: [
                            u.Wk,
                            p.bT,
                            s.qT,
                            s.me,
                            s.BC,
                            s.cb,
                            s.j4,
                            s.JD,
                            h,
                            g._f,
                            v.S,
                            _.N,
                        ],
                    }));
                }
                return t;
            })();
            var w = a(7164);
            const Y = (t) => [t];
            let F = (() => {
                class t {
                    constructor() {
                        (this.dividerText = 'OR'), (this.appRoutesNames = b.q);
                    }
                    static #e = (this.ɵfac = function (n) {
                        return new (n || t)();
                    });
                    static #t = (this.ɵcmp = e.VBU({
                        type: t,
                        selectors: [['app-form-footer']],
                        inputs: {
                            dividerText: 'dividerText',
                            highlighText: 'highlighText',
                            urlText: 'urlText',
                            url: 'url',
                        },
                        standalone: !0,
                        features: [e.aNF],
                        decls: 7,
                        vars: 6,
                        consts: [
                            ['align', 'center', 'styleClass', 'my-6'],
                            [1, 'text-sm'],
                            [1, 'text-center', 'text-600'],
                            [
                                1,
                                'text-blue-500',
                                'cursor-pointer',
                                3,
                                'routerLink',
                            ],
                        ],
                        template: function (n, r) {
                            1 & n &&
                                (e.j41(0, 'p-divider', 0)(1, 'span', 1),
                                e.EFF(2),
                                e.k0s()(),
                                e.j41(3, 'div', 2),
                                e.EFF(4),
                                e.j41(5, 'a', 3),
                                e.EFF(6),
                                e.k0s()()),
                                2 & n &&
                                    (e.R7$(2),
                                    e.JRh(r.dividerText),
                                    e.R7$(2),
                                    e.SpI(' ', r.highlighText, ' '),
                                    e.R7$(),
                                    e.Y8G(
                                        'routerLink',
                                        e.eq3(4, Y, '/auth/' + r.url)
                                    ),
                                    e.R7$(),
                                    e.JRh(r.urlText));
                        },
                        dependencies: [w.m, w.c, u.iI, u.Wk],
                        encapsulation: 2,
                    }));
                }
                return t;
            })();
            var R = a(7983);
            function B(t, i) {
                1 & t &&
                    (e.j41(0, 'small', 23),
                    e.EFF(1, ' Name is required. '),
                    e.k0s());
            }
            function U(t, i) {
                1 & t && (e.qex(0), e.EFF(1, ' Email is required. '), e.bVm());
            }
            function A(t, i) {
                1 & t &&
                    (e.qex(0), e.EFF(1, ' Invalid email format. '), e.bVm());
            }
            function O(t, i) {
                if (
                    (1 & t &&
                        (e.j41(0, 'small', 23),
                        e.DNE(1, U, 2, 0, 'ng-container', 24)(
                            2,
                            A,
                            2,
                            0,
                            'ng-container',
                            24
                        ),
                        e.k0s()),
                    2 & t)
                ) {
                    const o = e.XpG();
                    e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.username.hasError('required')
                        ),
                        e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.username.hasError('email')
                        );
                }
            }
            function M(t, i) {
                return (o) => {
                    const n = o.get(t),
                        r = o.get(i);
                    return n && r && n.value !== r.value
                        ? { mismatch: !0 }
                        : null;
                };
            }
            function H(t, i) {
                1 & t &&
                    (e.qex(0), e.EFF(1, ' Password is required. '), e.bVm());
            }
            function q(t, i) {
                1 & t &&
                    (e.qex(0),
                    e.EFF(1, ' Password must have at least 8 characters '),
                    e.bVm());
            }
            function L(t, i) {
                if (
                    (1 & t &&
                        (e.j41(0, 'small', 16),
                        e.DNE(1, H, 2, 0, 'ng-container', 17)(
                            2,
                            q,
                            2,
                            0,
                            'ng-container',
                            17
                        ),
                        e.k0s()),
                    2 & t)
                ) {
                    const o = e.XpG();
                    e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.password.hasError('required')
                        ),
                        e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.password.hasError('minlength')
                        );
                }
            }
            function W(t, i) {
                1 & t &&
                    (e.j41(0, 'small', 16),
                    e.EFF(1, ' Passwords do not match. '),
                    e.k0s());
            }
            const z = (t) => [t];
            function J(t, i) {
                1 & t && (e.qex(0), e.EFF(1, ' Email is required. '), e.bVm());
            }
            function Z(t, i) {
                1 & t &&
                    (e.qex(0), e.EFF(1, ' Invalid email format. '), e.bVm());
            }
            function Q(t, i) {
                if (
                    (1 & t &&
                        (e.j41(0, 'small', 14),
                        e.DNE(1, J, 2, 0, 'ng-container', 15)(
                            2,
                            Z,
                            2,
                            0,
                            'ng-container',
                            15
                        ),
                        e.k0s()),
                    2 & t)
                ) {
                    const o = e.XpG(2);
                    e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.username.hasError('required')
                        ),
                        e.R7$(),
                        e.Y8G(
                            'ngIf',
                            o.formControls.username.hasError('email')
                        );
                }
            }
            function K(t, i) {
                if (1 & t) {
                    const o = e.RV6();
                    e.j41(0, 'div', 3),
                        e.nrm(1, 'app-form-header', 4),
                        e.j41(2, 'form', 5),
                        e.bIt('ngSubmit', function () {
                            e.eBV(o);
                            const r = e.XpG();
                            return e.Njj(r.onSubmit());
                        }),
                        e.j41(3, 'div', 6)(4, 'label', 7),
                        e.EFF(5, 'Email address'),
                        e.k0s(),
                        e.j41(6, 'div', 8),
                        e.nrm(7, 'i', 9)(8, 'input', 10),
                        e.k0s(),
                        e.DNE(9, Q, 3, 2, 'small', 11),
                        e.nI1(10, 'formControlInvalid'),
                        e.k0s(),
                        e.nrm(11, 'button', 12),
                        e.k0s(),
                        e.nrm(12, 'app-form-footer', 13),
                        e.k0s();
                }
                if (2 & t) {
                    const o = e.XpG();
                    e.R7$(),
                        e.Y8G(
                            'header',
                            o.authRoutesNames.FORGOT_PASSWORD.label
                        ),
                        e.R7$(),
                        e.Y8G('formGroup', o.forgotForm),
                        e.R7$(7),
                        e.Y8G('ngIf', e.bMT(10, 8, o.formControls.username)),
                        e.R7$(2),
                        e.Mz_(
                            'icon',
                            'pi ',
                            o.forgotForm.invalid ? '' : 'pi-chevron-right',
                            ''
                        ),
                        e.Y8G('loading', o.isSubmitted)(
                            'disabled',
                            o.forgotForm.invalid
                        ),
                        e.R7$(),
                        e.Y8G('url', o.authRoutesNames.SIGNIN.url);
                }
            }
            function ee(t, i) {
                if (
                    (1 & t &&
                        (e.j41(0, 'div', 16),
                        e.nrm(1, 'app-form-header', 17),
                        e.j41(2, 'div', 18),
                        e.nrm(3, 'button', 19),
                        e.k0s()()),
                    2 & t)
                ) {
                    const o = e.XpG();
                    e.R7$(),
                        e.Y8G(
                            'header',
                            'Recover Password email sent<br /> to  <strong>' +
                                o.formControls.username.value +
                                '</strong>'
                        ),
                        e.R7$(2),
                        e.Mz_(
                            'label',
                            'Return to ',
                            o.authRoutesNames.SIGNIN.label,
                            ''
                        ),
                        e.Y8G(
                            'routerLink',
                            e.eq3(4, z, '/' + o.appRoutesNames.AUTH.url)
                        );
                }
            }
            const se = u.iI.forChild([
                {
                    path: '',
                    component: I,
                    children: [
                        {
                            path: '',
                            redirectTo: m.SIGNIN.url,
                            pathMatch: 'full',
                        },
                        { path: m.SIGNIN.url, component: V },
                        {
                            path: m.SIGNUP.url,
                            component: (() => {
                                class t {
                                    constructor() {
                                        (this.authRoutesNames = m),
                                            (this.formBuilder = (0, e.WQX)(
                                                s.ok
                                            )),
                                            (this.signUpForm =
                                                this.formBuilder.group({
                                                    name: ['', [s.k0.required]],
                                                    username: [
                                                        '',
                                                        [
                                                            s.k0.required,
                                                            s.k0.email,
                                                        ],
                                                    ],
                                                    password: [
                                                        '',
                                                        [
                                                            s.k0.required,
                                                            s.k0.minLength(8),
                                                        ],
                                                    ],
                                                }));
                                    }
                                    get formControls() {
                                        return this.signUpForm.controls;
                                    }
                                    onSubmit() {
                                        (this.isSubmitted = !0),
                                            this.signUpForm.invalid
                                                ? (this.isSubmitted = !1)
                                                : setTimeout(() => {
                                                      this.isSubmitted = !1;
                                                  }, 2e3);
                                    }
                                    showHidePassword() {
                                        this.displayPassword =
                                            !this.displayPassword;
                                    }
                                    static #e = (this.ɵfac = function (n) {
                                        return new (n || t)();
                                    });
                                    static #t = (this.ɵcmp = e.VBU({
                                        type: t,
                                        selectors: [['app-signup']],
                                        decls: 42,
                                        vars: 18,
                                        consts: [
                                            ['op', ''],
                                            [
                                                1,
                                                'auth-box',
                                                'surface-card',
                                                'w-screen',
                                                'p-5',
                                                'pt-6',
                                                'sm:p-7',
                                                'fadein',
                                            ],
                                            [
                                                'imageUrl',
                                                './assets/images/undraw_signup.svg',
                                                'imageStyleClass',
                                                'w-5',
                                                3,
                                                'header',
                                            ],
                                            [
                                                'autocomplete',
                                                'off',
                                                3,
                                                'ngSubmit',
                                                'formGroup',
                                            ],
                                            [1, 'field'],
                                            ['for', 'name', 1, 'text-900'],
                                            [1, 'p-input-icon-left'],
                                            [1, 'pi', 'pi-user'],
                                            [
                                                'type',
                                                'text',
                                                'formControlName',
                                                'name',
                                                'id',
                                                'name',
                                                'pInputText',
                                                '',
                                                1,
                                                'w-full',
                                            ],
                                            ['class', 'p-error', 4, 'ngIf'],
                                            ['for', 'username', 1, 'text-900'],
                                            [1, 'pi', 'pi-envelope'],
                                            [
                                                'type',
                                                'email',
                                                'formControlName',
                                                'username',
                                                'id',
                                                'username',
                                                'pInputText',
                                                '',
                                                1,
                                                'w-full',
                                            ],
                                            [1, 'field', 'mb-2', 'relative'],
                                            [
                                                'for',
                                                'password',
                                                1,
                                                'text-900',
                                                'block',
                                            ],
                                            [
                                                1,
                                                'p-input-icon-left',
                                                'p-input-icon-right',
                                            ],
                                            [1, 'pi', 'pi-lock'],
                                            [
                                                'formControlName',
                                                'password',
                                                'id',
                                                'password',
                                                'pInputText',
                                                '',
                                                1,
                                                'w-full',
                                                3,
                                                'focus',
                                                'blur',
                                                'type',
                                            ],
                                            [3, 'click', 'title'],
                                            [1, 'mt-2'],
                                            [
                                                1,
                                                'pl-2',
                                                'ml-2',
                                                'mt-0',
                                                2,
                                                'line-height',
                                                '1.5',
                                            ],
                                            [
                                                'pButton',
                                                '',
                                                'label',
                                                'Register',
                                                'iconPos',
                                                'right',
                                                1,
                                                'w-full',
                                                'mt-5',
                                                3,
                                                'loading',
                                                'disabled',
                                            ],
                                            [
                                                'highlighText',
                                                'Already have an account?',
                                                'urlText',
                                                'Sign In here',
                                                3,
                                                'url',
                                            ],
                                            [1, 'p-error'],
                                            [4, 'ngIf'],
                                        ],
                                        template: function (n, r) {
                                            if (1 & n) {
                                                const l = e.RV6();
                                                e.j41(0, 'div', 1),
                                                    e.nrm(
                                                        1,
                                                        'app-form-header',
                                                        2
                                                    ),
                                                    e.j41(2, 'form', 3),
                                                    e.bIt(
                                                        'ngSubmit',
                                                        function () {
                                                            return (
                                                                e.eBV(l),
                                                                e.Njj(
                                                                    r.onSubmit()
                                                                )
                                                            );
                                                        }
                                                    ),
                                                    e.j41(3, 'div', 4)(
                                                        4,
                                                        'label',
                                                        5
                                                    ),
                                                    e.EFF(5, 'Name'),
                                                    e.k0s(),
                                                    e.j41(6, 'div', 6),
                                                    e.nrm(7, 'i', 7)(
                                                        8,
                                                        'input',
                                                        8
                                                    ),
                                                    e.k0s(),
                                                    e.DNE(
                                                        9,
                                                        B,
                                                        2,
                                                        0,
                                                        'small',
                                                        9
                                                    ),
                                                    e.nI1(
                                                        10,
                                                        'formControlInvalid'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(11, 'div', 4)(
                                                        12,
                                                        'label',
                                                        10
                                                    ),
                                                    e.EFF(13, 'Email address'),
                                                    e.k0s(),
                                                    e.j41(14, 'div', 6),
                                                    e.nrm(15, 'i', 11)(
                                                        16,
                                                        'input',
                                                        12
                                                    ),
                                                    e.k0s(),
                                                    e.DNE(
                                                        17,
                                                        O,
                                                        3,
                                                        2,
                                                        'small',
                                                        9
                                                    ),
                                                    e.nI1(
                                                        18,
                                                        'formControlInvalid'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(19, 'div', 13)(
                                                        20,
                                                        'label',
                                                        14
                                                    ),
                                                    e.EFF(21, 'Password'),
                                                    e.k0s(),
                                                    e.j41(22, 'div', 15),
                                                    e.nrm(23, 'i', 16),
                                                    e.j41(24, 'input', 17),
                                                    e.bIt(
                                                        'focus',
                                                        function (c) {
                                                            e.eBV(l);
                                                            const f = e.sdS(27);
                                                            return e.Njj(
                                                                f.toggle(c)
                                                            );
                                                        }
                                                    )('blur', function (c) {
                                                        e.eBV(l);
                                                        const f = e.sdS(27);
                                                        return e.Njj(
                                                            f.toggle(c)
                                                        );
                                                    }),
                                                    e.k0s(),
                                                    e.j41(25, 'i', 18),
                                                    e.bIt('click', function () {
                                                        return (
                                                            e.eBV(l),
                                                            e.Njj(
                                                                r.showHidePassword()
                                                            )
                                                        );
                                                    }),
                                                    e.k0s()(),
                                                    e.j41(
                                                        26,
                                                        'p-overlayPanel',
                                                        null,
                                                        0
                                                    )(28, 'strong', 19),
                                                    e.EFF(
                                                        29,
                                                        'Good passwords must have'
                                                    ),
                                                    e.k0s(),
                                                    e.nrm(30, 'p-divider'),
                                                    e.j41(
                                                        31,
                                                        'ul',
                                                        20
                                                    )(32, 'li'),
                                                    e.EFF(
                                                        33,
                                                        'At least one lowercase'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(34, 'li'),
                                                    e.EFF(
                                                        35,
                                                        'At least one UPPERCASE'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(36, 'li'),
                                                    e.EFF(
                                                        37,
                                                        'At least 1 numeric'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(38, 'li'),
                                                    e.EFF(
                                                        39,
                                                        'Minimum 8 characters'
                                                    ),
                                                    e.k0s()()()(),
                                                    e.nrm(40, 'button', 21),
                                                    e.k0s(),
                                                    e.nrm(
                                                        41,
                                                        'app-form-footer',
                                                        22
                                                    ),
                                                    e.k0s();
                                            }
                                            2 & n &&
                                                (e.R7$(),
                                                e.Mz_(
                                                    'header',
                                                    '',
                                                    r.authRoutesNames.SIGNUP
                                                        .label,
                                                    ' here!'
                                                ),
                                                e.R7$(),
                                                e.Y8G(
                                                    'formGroup',
                                                    r.signUpForm
                                                ),
                                                e.R7$(7),
                                                e.Y8G(
                                                    'ngIf',
                                                    e.bMT(
                                                        10,
                                                        14,
                                                        r.formControls.name
                                                    ) &&
                                                        r.formControls.name.hasError(
                                                            'required'
                                                        )
                                                ),
                                                e.R7$(8),
                                                e.Y8G(
                                                    'ngIf',
                                                    e.bMT(
                                                        18,
                                                        16,
                                                        r.formControls.username
                                                    )
                                                ),
                                                e.R7$(7),
                                                e.FS9(
                                                    'type',
                                                    r.displayPassword
                                                        ? 'text'
                                                        : 'password'
                                                ),
                                                e.R7$(),
                                                e.ZvI(
                                                    'pi pi-',
                                                    r.displayPassword
                                                        ? 'eye-slash'
                                                        : 'eye',
                                                    ' cursor-pointer'
                                                ),
                                                e.Mz_(
                                                    'title',
                                                    '',
                                                    r.displayPassword
                                                        ? 'Hide'
                                                        : 'Show',
                                                    ' password'
                                                ),
                                                e.R7$(15),
                                                e.Y8G('loading', r.isSubmitted)(
                                                    'disabled',
                                                    r.signUpForm.invalid
                                                ),
                                                e.R7$(),
                                                e.Y8G(
                                                    'url',
                                                    r.authRoutesNames.SIGNIN.url
                                                ));
                                        },
                                        dependencies: [
                                            p.bT,
                                            s.qT,
                                            s.me,
                                            s.BC,
                                            s.cb,
                                            s.j4,
                                            s.JD,
                                            F,
                                            h,
                                            g._f,
                                            v.S,
                                            w.c,
                                            R.j,
                                            _.N,
                                        ],
                                    }));
                                }
                                return t;
                            })(),
                        },
                        {
                            path: m.RECOVER_PASSWORD.url,
                            component: (() => {
                                class t {
                                    constructor() {
                                        (this.authRoutesNames = m),
                                            (this.formBuilder = (0, e.WQX)(
                                                s.ok
                                            )),
                                            (this.recoverForm =
                                                this.formBuilder.group(
                                                    {
                                                        password: [
                                                            '',
                                                            [
                                                                s.k0.required,
                                                                s.k0.minLength(
                                                                    8
                                                                ),
                                                            ],
                                                        ],
                                                        confirmPassword: [
                                                            '',
                                                            [s.k0.required],
                                                        ],
                                                    },
                                                    {
                                                        validators: [
                                                            M(
                                                                'password',
                                                                'confirmPassword'
                                                            ),
                                                        ],
                                                    }
                                                ));
                                    }
                                    get formControls() {
                                        return this.recoverForm.controls;
                                    }
                                    get passwordMatchError() {
                                        return (
                                            this.recoverForm.getError(
                                                'mismatch'
                                            ) &&
                                            this.recoverForm.get(
                                                'confirmPassword'
                                            )?.touched
                                        );
                                    }
                                    onSubmit() {
                                        (this.isSubmitted = !0),
                                            this.recoverForm.invalid
                                                ? (this.isSubmitted = !1)
                                                : setTimeout(() => {
                                                      this.isSubmitted = !1;
                                                  }, 2e3);
                                    }
                                    showHidePassword() {
                                        this.displayPassword =
                                            !this.displayPassword;
                                    }
                                    static #e = (this.ɵfac = function (n) {
                                        return new (n || t)();
                                    });
                                    static #t = (this.ɵcmp = e.VBU({
                                        type: t,
                                        selectors: [['app-recover-password']],
                                        decls: 35,
                                        vars: 22,
                                        consts: [
                                            ['op', ''],
                                            [
                                                1,
                                                'auth-box',
                                                'surface-card',
                                                'w-screen',
                                                'p-5',
                                                'pt-6',
                                                'sm:p-7',
                                                'fadein',
                                            ],
                                            [
                                                'imageUrl',
                                                './assets/images/undraw_recover_password.svg',
                                                'imageStyleClass',
                                                'w-5',
                                                'subHeader',
                                                "We'll send you a link on your email to reset your password.",
                                                3,
                                                'header',
                                            ],
                                            [
                                                'autocomplete',
                                                'off',
                                                3,
                                                'ngSubmit',
                                                'formGroup',
                                            ],
                                            [1, 'field'],
                                            [
                                                'for',
                                                'password',
                                                1,
                                                'text-900',
                                                'block',
                                            ],
                                            [
                                                1,
                                                'p-input-icon-left',
                                                'p-input-icon-right',
                                            ],
                                            [1, 'pi', 'pi-lock'],
                                            [
                                                'formControlName',
                                                'password',
                                                'id',
                                                'password',
                                                'pInputText',
                                                '',
                                                1,
                                                'w-full',
                                                3,
                                                'focus',
                                                'blur',
                                                'type',
                                            ],
                                            [3, 'click', 'title'],
                                            [1, 'mt-2'],
                                            [
                                                1,
                                                'pl-2',
                                                'ml-2',
                                                'mt-0',
                                                2,
                                                'line-height',
                                                '1.5',
                                            ],
                                            ['class', 'p-error', 4, 'ngIf'],
                                            [
                                                'for',
                                                'confirmPassword',
                                                1,
                                                'text-900',
                                                'block',
                                            ],
                                            [
                                                'formControlName',
                                                'confirmPassword',
                                                'id',
                                                'confirmPassword',
                                                'pInputText',
                                                '',
                                                1,
                                                'w-full',
                                                3,
                                                'type',
                                            ],
                                            [
                                                'pButton',
                                                '',
                                                'label',
                                                'Recover My Password',
                                                'iconPos',
                                                'right',
                                                1,
                                                'w-full',
                                                'mt-5',
                                                3,
                                                'icon',
                                                'loading',
                                                'disabled',
                                            ],
                                            [1, 'p-error'],
                                            [4, 'ngIf'],
                                        ],
                                        template: function (n, r) {
                                            if (1 & n) {
                                                const l = e.RV6();
                                                e.j41(0, 'div', 1),
                                                    e.nrm(
                                                        1,
                                                        'app-form-header',
                                                        2
                                                    ),
                                                    e.j41(2, 'form', 3),
                                                    e.bIt(
                                                        'ngSubmit',
                                                        function () {
                                                            return (
                                                                e.eBV(l),
                                                                e.Njj(
                                                                    r.onSubmit()
                                                                )
                                                            );
                                                        }
                                                    ),
                                                    e.j41(3, 'div', 4)(
                                                        4,
                                                        'label',
                                                        5
                                                    ),
                                                    e.EFF(5, 'New Password'),
                                                    e.k0s(),
                                                    e.j41(6, 'div', 6),
                                                    e.nrm(7, 'i', 7),
                                                    e.j41(8, 'input', 8),
                                                    e.bIt(
                                                        'focus',
                                                        function (c) {
                                                            e.eBV(l);
                                                            const f = e.sdS(11);
                                                            return e.Njj(
                                                                f.toggle(c)
                                                            );
                                                        }
                                                    )('blur', function (c) {
                                                        e.eBV(l);
                                                        const f = e.sdS(11);
                                                        return e.Njj(
                                                            f.toggle(c)
                                                        );
                                                    }),
                                                    e.k0s(),
                                                    e.j41(9, 'i', 9),
                                                    e.bIt('click', function () {
                                                        return (
                                                            e.eBV(l),
                                                            e.Njj(
                                                                r.showHidePassword()
                                                            )
                                                        );
                                                    }),
                                                    e.k0s()(),
                                                    e.j41(
                                                        10,
                                                        'p-overlayPanel',
                                                        null,
                                                        0
                                                    )(12, 'strong', 10),
                                                    e.EFF(
                                                        13,
                                                        'Good passwords must have'
                                                    ),
                                                    e.k0s(),
                                                    e.nrm(14, 'p-divider'),
                                                    e.j41(
                                                        15,
                                                        'ul',
                                                        11
                                                    )(16, 'li'),
                                                    e.EFF(
                                                        17,
                                                        'At least one lowercase'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(18, 'li'),
                                                    e.EFF(
                                                        19,
                                                        'At least one UPPERCASE'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(20, 'li'),
                                                    e.EFF(
                                                        21,
                                                        'At least 1 numeric'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(22, 'li'),
                                                    e.EFF(
                                                        23,
                                                        'Minimum 8 characters'
                                                    ),
                                                    e.k0s()()(),
                                                    e.DNE(
                                                        24,
                                                        L,
                                                        3,
                                                        2,
                                                        'small',
                                                        12
                                                    ),
                                                    e.nI1(
                                                        25,
                                                        'formControlInvalid'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(26, 'div', 4)(
                                                        27,
                                                        'label',
                                                        13
                                                    ),
                                                    e.EFF(
                                                        28,
                                                        'Confirm New Password'
                                                    ),
                                                    e.k0s(),
                                                    e.j41(29, 'div', 6),
                                                    e.nrm(30, 'i', 7)(
                                                        31,
                                                        'input',
                                                        14
                                                    ),
                                                    e.j41(32, 'i', 9),
                                                    e.bIt('click', function () {
                                                        return (
                                                            e.eBV(l),
                                                            e.Njj(
                                                                r.showHidePassword()
                                                            )
                                                        );
                                                    }),
                                                    e.k0s()(),
                                                    e.DNE(
                                                        33,
                                                        W,
                                                        2,
                                                        0,
                                                        'small',
                                                        12
                                                    ),
                                                    e.k0s(),
                                                    e.nrm(34, 'button', 15),
                                                    e.k0s()();
                                            }
                                            if (2 & n) {
                                                let l;
                                                e.R7$(),
                                                    e.Y8G(
                                                        'header',
                                                        r.authRoutesNames
                                                            .RECOVER_PASSWORD
                                                            .label
                                                    ),
                                                    e.R7$(),
                                                    e.Y8G(
                                                        'formGroup',
                                                        r.recoverForm
                                                    ),
                                                    e.R7$(6),
                                                    e.FS9(
                                                        'type',
                                                        r.displayPassword
                                                            ? 'text'
                                                            : 'password'
                                                    ),
                                                    e.R7$(),
                                                    e.ZvI(
                                                        'pi pi-',
                                                        r.displayPassword
                                                            ? 'eye-slash'
                                                            : 'eye',
                                                        ' cursor-pointer'
                                                    ),
                                                    e.Mz_(
                                                        'title',
                                                        '',
                                                        r.displayPassword
                                                            ? 'Hide'
                                                            : 'Show',
                                                        ' password'
                                                    ),
                                                    e.R7$(15),
                                                    e.Y8G(
                                                        'ngIf',
                                                        e.bMT(
                                                            25,
                                                            20,
                                                            r.formControls
                                                                .password
                                                        )
                                                    ),
                                                    e.R7$(7),
                                                    e.FS9(
                                                        'type',
                                                        r.displayPassword
                                                            ? 'text'
                                                            : 'password'
                                                    ),
                                                    e.R7$(),
                                                    e.ZvI(
                                                        'pi pi-',
                                                        r.displayPassword
                                                            ? 'eye-slash'
                                                            : 'eye',
                                                        ' cursor-pointer'
                                                    ),
                                                    e.Mz_(
                                                        'title',
                                                        '',
                                                        r.displayPassword
                                                            ? 'Hide'
                                                            : 'Show',
                                                        ' password'
                                                    ),
                                                    e.R7$(),
                                                    e.Y8G(
                                                        'ngIf',
                                                        r.recoverForm.getError(
                                                            'mismatch'
                                                        ) &&
                                                            (null ==
                                                            (l =
                                                                r.recoverForm.get(
                                                                    'confirmPassword'
                                                                ))
                                                                ? null
                                                                : l.touched)
                                                    ),
                                                    e.R7$(),
                                                    e.Mz_(
                                                        'icon',
                                                        'pi ',
                                                        r.recoverForm.invalid
                                                            ? ''
                                                            : 'pi-chevron-right',
                                                        ''
                                                    ),
                                                    e.Y8G(
                                                        'loading',
                                                        r.isSubmitted
                                                    )(
                                                        'disabled',
                                                        r.recoverForm.invalid
                                                    );
                                            }
                                        },
                                        dependencies: [
                                            p.bT,
                                            s.qT,
                                            s.me,
                                            s.BC,
                                            s.cb,
                                            s.j4,
                                            s.JD,
                                            h,
                                            g._f,
                                            v.S,
                                            w.c,
                                            R.j,
                                            _.N,
                                        ],
                                    }));
                                }
                                return t;
                            })(),
                        },
                        {
                            path: m.FORGOT_PASSWORD.url,
                            component: (() => {
                                class t {
                                    constructor() {
                                        (this.appRoutesNames = b.q),
                                            (this.authRoutesNames = m),
                                            (this.formBuilder = (0, e.WQX)(
                                                s.ok
                                            )),
                                            (this.forgotForm =
                                                this.formBuilder.group({
                                                    username: [
                                                        '',
                                                        [
                                                            s.k0.required,
                                                            s.k0.email,
                                                        ],
                                                    ],
                                                }));
                                    }
                                    get formControls() {
                                        return this.forgotForm.controls;
                                    }
                                    onSubmit() {
                                        (this.isSubmitted = !0),
                                            this.forgotForm.invalid
                                                ? (this.isSubmitted = !1)
                                                : setTimeout(() => {
                                                      (this.isSubmitted = !1),
                                                          (this.wasRecoverSended =
                                                              !0);
                                                  }, 2e3);
                                    }
                                    static #e = (this.ɵfac = function (n) {
                                        return new (n || t)();
                                    });
                                    static #t = (this.ɵcmp = e.VBU({
                                        type: t,
                                        selectors: [['app-forgot-password']],
                                        decls: 3,
                                        vars: 2,
                                        consts: [
                                            [
                                                1,
                                                'auth-box',
                                                'surface-card',
                                                'w-screen',
                                                'p-5',
                                                'pt-6',
                                                'sm:p-7',
                                                'fadein',
                                            ],
                                            ['class', 'fadein', 4, 'ngIf'],
                                            [
                                                'class',
                                                'fadein animation-duration-500',
                                                4,
                                                'ngIf',
                                            ],
                                            [1, 'fadein'],
                                            [
                                                'imageUrl',
                                                './assets/images/undraw_forgot_password.svg',
                                                'imageStyleClass',
                                                'w-5',
                                                'subHeader',
                                                "We'll send you a link on your email to reset your password.",
                                                3,
                                                'header',
                                            ],
                                            [
                                                'autocomplete',
                                                'off',
                                                3,
                                                'ngSubmit',
                                                'formGroup',
                                            ],
                                            [1, 'field'],
                                            ['for', 'username', 1, 'text-900'],
                                            [1, 'p-input-icon-left'],
                                            [1, 'pi', 'pi-envelope'],
                                            [
                                                'type',
                                                'email',
                                                'formControlName',
                                                'username',
                                                'id',
                                                'username',
                                                'pInputText',
                                                '',
                                                1,
                                                'w-full',
                                            ],
                                            ['class', 'p-error', 4, 'ngIf'],
                                            [
                                                'pButton',
                                                '',
                                                'label',
                                                'Recover My Password',
                                                'iconPos',
                                                'right',
                                                1,
                                                'w-full',
                                                'mt-5',
                                                3,
                                                'icon',
                                                'loading',
                                                'disabled',
                                            ],
                                            [
                                                'highlighText',
                                                'I remembered my password.',
                                                'urlText',
                                                'Return to Sign In',
                                                3,
                                                'url',
                                            ],
                                            [1, 'p-error'],
                                            [4, 'ngIf'],
                                            [
                                                1,
                                                'fadein',
                                                'animation-duration-500',
                                            ],
                                            [
                                                'imageUrl',
                                                './assets/images/undraw_recover_success.svg',
                                                'imageStyleClass',
                                                'w-5',
                                                'subHeader',
                                                'Verify your inbox. If is not there try the spam folder.',
                                                3,
                                                'header',
                                            ],
                                            [1, 'text-center'],
                                            [
                                                'pButton',
                                                '',
                                                'type',
                                                'button',
                                                'iconPos',
                                                'right',
                                                1,
                                                'w-full',
                                                'mt-5',
                                                3,
                                                'label',
                                                'routerLink',
                                            ],
                                        ],
                                        template: function (n, r) {
                                            1 & n &&
                                                (e.j41(0, 'div', 0),
                                                e.DNE(1, K, 13, 10, 'div', 1)(
                                                    2,
                                                    ee,
                                                    4,
                                                    6,
                                                    'div',
                                                    2
                                                ),
                                                e.k0s()),
                                                2 & n &&
                                                    (e.R7$(),
                                                    e.Y8G(
                                                        'ngIf',
                                                        !r.wasRecoverSended
                                                    ),
                                                    e.R7$(),
                                                    e.Y8G(
                                                        'ngIf',
                                                        r.wasRecoverSended
                                                    ));
                                        },
                                        dependencies: [
                                            u.Wk,
                                            p.bT,
                                            s.qT,
                                            s.me,
                                            s.BC,
                                            s.cb,
                                            s.j4,
                                            s.JD,
                                            F,
                                            h,
                                            g._f,
                                            v.S,
                                            _.N,
                                        ],
                                    }));
                                }
                                return t;
                            })(),
                        },
                        {
                            path: m.VALIDATE_OTP.url,
                            component: (() => {
                                class t {
                                    constructor() {
                                        (this.authRoutesNames = m),
                                            (this.resendTimer = 5),
                                            (this.resendInterval = null),
                                            (this.formBuilder = (0, e.WQX)(
                                                s.ok
                                            )),
                                            (this.otpForm =
                                                this.formBuilder.group({
                                                    otp: [
                                                        '',
                                                        [
                                                            s.k0.required,
                                                            s.k0.pattern(
                                                                /^[0-9]+$/
                                                            ),
                                                            s.k0.maxLength(6),
                                                            s.k0.minLength(6),
                                                        ],
                                                    ],
                                                }));
                                    }
                                    get formControls() {
                                        return this.otpForm.controls;
                                    }
                                    ngOnDestroy() {
                                        clearInterval(this.resendInterval);
                                    }
                                    sendAnotherCode() {
                                        (this.isResending = !0),
                                            setTimeout(() => {
                                                this.isResending = !1;
                                            }, 2e3),
                                            clearInterval(this.resendInterval),
                                            (this.resendCounter =
                                                this.resendTimer),
                                            (this.resendInterval = setInterval(
                                                () => {
                                                    this.resendCounter--,
                                                        0 ===
                                                            this
                                                                .resendCounter &&
                                                            clearInterval(
                                                                this
                                                                    .resendInterval
                                                            );
                                                },
                                                1e3
                                            ));
                                    }
                                    onSubmit() {
                                        (this.isSubmitted = !0),
                                            this.otpForm.invalid
                                                ? (this.isSubmitted = !1)
                                                : setTimeout(() => {
                                                      this.isSubmitted = !1;
                                                  }, 2e3);
                                    }
                                    static #e = (this.ɵfac = function (n) {
                                        return new (n || t)();
                                    });
                                    static #t = (this.ɵcmp = e.VBU({
                                        type: t,
                                        selectors: [['app-validate-otp']],
                                        decls: 9,
                                        vars: 10,
                                        consts: [
                                            [
                                                1,
                                                'auth-box',
                                                'surface-card',
                                                'w-screen',
                                                'p-5',
                                                'pt-6',
                                                'sm:p-7',
                                                'fadein',
                                            ],
                                            [
                                                'imageUrl',
                                                './assets/images/undraw_validate_otp.svg',
                                                'imageStyleClass',
                                                'w-8',
                                                'subHeader',
                                                'We sent you a code. Insert the code to confirm your request.',
                                                3,
                                                'header',
                                            ],
                                            [
                                                'autocomplete',
                                                'off',
                                                3,
                                                'ngSubmit',
                                                'formGroup',
                                            ],
                                            [1, 'field', 'text-center', 'mb-5'],
                                            [
                                                'type',
                                                'tel',
                                                'formControlName',
                                                'otp',
                                                'id',
                                                'otp',
                                                'placeholder',
                                                '_ _ _ _ _ _',
                                                'minlength',
                                                '6',
                                                'maxlength',
                                                '6',
                                                'pInputText',
                                                '',
                                                1,
                                                'input-otp',
                                                'text-3xl',
                                                'text-center',
                                                'p-2',
                                                'w-6',
                                            ],
                                            [
                                                1,
                                                'text-center',
                                                'text-600',
                                                'text-xl',
                                            ],
                                            [
                                                'pButton',
                                                '',
                                                1,
                                                'block',
                                                'p-button-text',
                                                'text-xl',
                                                'mt-2',
                                                'mx-auto',
                                                3,
                                                'click',
                                                'label',
                                                'loading',
                                                'disabled',
                                            ],
                                            [
                                                'pButton',
                                                '',
                                                'label',
                                                'Validate Code',
                                                'iconPos',
                                                'right',
                                                1,
                                                'w-full',
                                                'mt-6',
                                                3,
                                                'icon',
                                                'loading',
                                                'disabled',
                                            ],
                                        ],
                                        template: function (n, r) {
                                            1 & n &&
                                                (e.j41(0, 'div', 0),
                                                e.nrm(1, 'app-form-header', 1),
                                                e.j41(2, 'form', 2),
                                                e.bIt('ngSubmit', function () {
                                                    return r.onSubmit();
                                                }),
                                                e.j41(3, 'div', 3),
                                                e.nrm(4, 'input', 4),
                                                e.k0s(),
                                                e.j41(5, 'div', 5),
                                                e.EFF(
                                                    6,
                                                    ' Did you receive the code? '
                                                ),
                                                e.j41(7, 'button', 6),
                                                e.bIt('click', function () {
                                                    return r.sendAnotherCode();
                                                }),
                                                e.k0s()(),
                                                e.nrm(8, 'button', 7),
                                                e.k0s()()),
                                                2 & n &&
                                                    (e.R7$(),
                                                    e.Y8G(
                                                        'header',
                                                        r.authRoutesNames
                                                            .VALIDATE_OTP.label
                                                    ),
                                                    e.R7$(),
                                                    e.Y8G(
                                                        'formGroup',
                                                        r.otpForm
                                                    ),
                                                    e.R7$(5),
                                                    e.Mz_(
                                                        'label',
                                                        'Send Another One',
                                                        r.resendCounter
                                                            ? ' (' +
                                                                  r.resendCounter +
                                                                  's)'
                                                            : '',
                                                        ''
                                                    ),
                                                    e.Y8G(
                                                        'loading',
                                                        r.isResending
                                                    )(
                                                        'disabled',
                                                        r.resendCounter
                                                    ),
                                                    e.R7$(),
                                                    e.Mz_(
                                                        'icon',
                                                        'pi ',
                                                        r.otpForm.invalid
                                                            ? ''
                                                            : 'pi-chevron-right',
                                                        ''
                                                    ),
                                                    e.Y8G(
                                                        'loading',
                                                        r.isSubmitted
                                                    )(
                                                        'disabled',
                                                        r.otpForm.invalid
                                                    ));
                                        },
                                        dependencies: [
                                            s.qT,
                                            s.me,
                                            s.BC,
                                            s.cb,
                                            s.xh,
                                            s.tU,
                                            s.j4,
                                            s.JD,
                                            h,
                                            g._f,
                                            v.S,
                                        ],
                                        styles: [
                                            '.input-otp[_ngcontent-%COMP%]{letter-spacing:.5rem}.input-otp[_ngcontent-%COMP%]::placeholder{letter-spacing:.1rem}',
                                        ],
                                    }));
                                }
                                return t;
                            })(),
                        },
                    ],
                },
            ]);
            var ne = a(9627);
            let ie = (() => {
                class t {
                    static #e = (this.ɵfac = function (n) {
                        return new (n || t)();
                    });
                    static #t = (this.ɵmod = e.$C({ type: t }));
                    static #r = (this.ɵinj = e.G2t({
                        imports: [u.iI, p.MD, se, s.X1, s.YN, F, h, ne.G],
                    }));
                }
                return t;
            })();
        },
    },
]);
