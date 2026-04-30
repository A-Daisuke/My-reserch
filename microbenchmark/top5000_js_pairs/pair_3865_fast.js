const Benchmark = {
    run: function() {
        const VAR_1 = { KEY_1: "nope" };
        console.log((((((VAR_1 || {}).bar || {}).baz || {}).wow || {}).its || {}).deep);
    }
};