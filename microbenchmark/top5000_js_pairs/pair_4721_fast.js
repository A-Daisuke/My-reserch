const Benchmark = {
    run: function() {
        var VAR_1 = [
          1,
          2,
          3,
          [4, 5, 6],
          1,
          3,
          5,
          6,
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          2,
          3,
          4,
          5,
          6,
        ];
        var VAR_6 = Array.prototype.concat.apply([], VAR_1);
    }
};