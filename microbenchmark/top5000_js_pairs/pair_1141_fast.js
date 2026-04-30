const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2,
          VAR_3,
          VAR_4 = ["a", "b", "c", "d", "e", "f", "g"];
        for (VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
          VAR_2 = VAR_4[VAR_1 % 8];
          switch (VAR_2) {
            case "a":
              VAR_3 = 1;
              break;
            case "b":
              VAR_3 = 2;
              break;
            case "c":
              VAR_3 = 3;
              break;
            case "d":
              VAR_3 = 4;
              break;
            case "e":
              VAR_3 = 5;
              break;
            case "f":
              VAR_3 = 6;
              break;
            default:
              VAR_3 = 7;
          }
        }
    }
};