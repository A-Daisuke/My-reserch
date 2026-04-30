const Benchmark = {
    run: function() {
        var VAR_1 =
          Math.random().toString() +
          Math.random().toString() +
          Math.random().toString() +
          Math.random().toString() +
          Math.random().toString() +
          Math.random().toString() +
          Math.random().toString() +
          Math.random().toString();
        VAR_1.split("");
    }
};