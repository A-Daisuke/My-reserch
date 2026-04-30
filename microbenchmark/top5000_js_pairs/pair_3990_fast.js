const Benchmark = {
    run: function() {
        var VAR_1 = new Error();
        Object.defineProperty({}, "stack", {
          KEY_1: function () {
            return VAR_1.stack;
          },
          KEY_2: true,
          KEY_3: false,
        });
    }
};