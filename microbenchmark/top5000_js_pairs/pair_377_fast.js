const Benchmark = {
    run: function() {
        "e".repeat(200000).split("").concat("e".repeat(200000).split(""));
    }
};