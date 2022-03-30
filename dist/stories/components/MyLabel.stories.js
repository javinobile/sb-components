"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Tertiary = exports.Secondary = exports.Allcaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: { color: { control: 'select' }, fontColor: { control: 'color' } },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'MyLabel',
    size: 'normal',
    color: 'primary',
    allCaps: false
};
exports.Allcaps = Template.bind({});
exports.Allcaps.args = {
    label: 'ALL CAPS',
    size: 'normal',
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Secondary',
    size: 'normal',
    color: 'secondary',
    allCaps: false
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary',
    allCaps: false
};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    label: 'Custom Color',
    size: 'h1',
    fontColor: '#000000',
};
