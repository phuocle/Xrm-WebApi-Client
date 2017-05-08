(function(undefined) {
    "use strict";

    var BatchResponse = function (parameters) {
        var params = parameters || {};

        this.name = params.name;
        this.changeSetResponses = params.changeSetResponses || [];
        this.batchResponses = params.batchResponses || [];
        this.isFaulted = params.isFaulted || [];
    };

    module.exports = BatchResponse;
} ());
