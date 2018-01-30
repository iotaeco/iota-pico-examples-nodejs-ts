"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const nodeClient_1 = require("@iota-pico/api/dist/client/nodeClient");
const errorHelper_1 = require("@iota-pico/core/dist/helpers/errorHelper");
const networkConfig = __importStar(require("../networkConfig"));
/**
 * Example of API getInclusionStates.
 */
async function getInclusionStatesExample(transactions, tips) {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new nodeClient_1.NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.info(`==> Performing getInclusionStates on ${networkEndPoint.getUri()}`);
    console.info();
    try {
        const response = await nodeClient.getInclusionStates({ transactions, tips });
        console.log("<== Success");
        console.log();
        if (response.states && response.states.length > 0) {
            console.log(`\tTotal States: ${response.states.length}`);
            console.log();
            response.states.slice(0, 50)
                .forEach(state => {
                console.log(`\tstate: ${state}`);
            });
            if (response.states.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        }
        else {
            console.log(`\tNo States Found`);
        }
    }
    catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.getInclusionStatesExample = getInclusionStatesExample;
