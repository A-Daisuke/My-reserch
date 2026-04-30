const Benchmark = {
    run: function() {
        [].slice.call(new Uint8Array(100));
    }
};