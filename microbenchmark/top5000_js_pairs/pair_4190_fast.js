const Benchmark = {
    run: function() {
        let VAR_1 = [
          "17",
          "63",
          "71",
          "22",
          "80",
          "41",
          "12",
          "34",
          "86",
          "91",
          "24",
          "14",
          "38",
          "89",
          "70",
          "40",
          "16",
          "87",
          "61",
          "19",
          "77",
        ];
        VAR_1.sort(function (VAR_2, VAR_3) {
          return VAR_2.localeCompare(VAR_3);
        });
    }
};