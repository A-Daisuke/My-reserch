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
        Array.prototype.slice.call(VAR_1);
    }
};