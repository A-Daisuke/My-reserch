const Benchmark = {
    run: function() {
        const VAR_1 = {};
        Error.captureStackTrace(VAR_1);
        VAR_1.stack;
    }
};