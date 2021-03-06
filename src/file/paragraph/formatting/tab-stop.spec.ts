import { assert } from "chai";

import { Utility } from "../../../tests/utility";
import { LeftTabStop, MaxRightTabStop } from "./tab-stop";

describe("LeftTabStop", () => {
    let tabStop: LeftTabStop;

    beforeEach(() => {
        tabStop = new LeftTabStop(100);
    });

    describe("#constructor()", () => {
        it("should create a Tab Stop with correct attributes", () => {
            const newJson = Utility.jsonify(tabStop);
            const attributes = {
                val: "left",
                pos: 100,
            };
            assert.equal(JSON.stringify(newJson.root[0].root[0].root), JSON.stringify(attributes));
        });

        it("should create a Tab Stop with w:tab", () => {
            const newJson = Utility.jsonify(tabStop);
            assert.equal(newJson.root[0].rootKey, "w:tab");
        });
    });
});

describe("RightTabStop", () => {
    // TODO
});

describe("MaxRightTabStop", () => {
    let tabStop: MaxRightTabStop;

    beforeEach(() => {
        tabStop = new MaxRightTabStop();
    });

    describe("#constructor()", () => {
        it("should create a Tab Stop with correct attributes", () => {
            const newJson = Utility.jsonify(tabStop);

            const attributes = {
                val: "right",
                pos: 9026,
            };
            assert.equal(JSON.stringify(newJson.root[0].root[0].root), JSON.stringify(attributes));
        });

        it("should create a Tab Stop with w:tab", () => {
            const newJson = Utility.jsonify(tabStop);
            assert.equal(newJson.root[0].rootKey, "w:tab");
        });
    });
});
