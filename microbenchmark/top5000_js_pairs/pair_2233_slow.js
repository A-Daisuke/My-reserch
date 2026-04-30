const Benchmark = {
    run: function() {
        Array.apply(null, Array(5000)).map(Function.prototype.call.bind(Number));
    }
};