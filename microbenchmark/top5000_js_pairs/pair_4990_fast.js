const Benchmark = {
    run: function() {
        Array.apply(null, Array(5)).map(Function.prototype.call.bind(Number));
    }
};