const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: "some",
          KEY_2: 987,
          KEY_3: {
            KEY_4: "one level",
            KEY_5: 998744,
            KEY_6: "lorem ipsum",
          },
          KEY_7: {
            KEY_8: "one level",
            KEY_9: 998744,
            KEY_10: "lorem ipsum",
            KEY_11: {
              KEY_12: "some new",
              KEY_13: "ok",
              KEY_14: {
                KEY_15: "one level",
                KEY_16: 998744,
                KEY_17: "lorem ipsum",
                KEY_18: {
                  KEY_19: "some new",
                  KEY_20: "ok",
                  KEY_21: "end",
                },
              },
            },
          },
        };
        (function () {
          return JSON.parse(JSON.stringify(VAR_1));
        })();
    }
};