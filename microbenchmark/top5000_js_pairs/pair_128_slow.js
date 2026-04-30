const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({
            KEY_1: {
              KEY_2: {
                KEY_3: {
                  KEY_4: {
                    KEY_5: "1",
                    KEY_6: "",
                  },
                  KEY_7: {
                    KEY_8: "2",
                    KEY_9: "",
                  },
                },
              },
            },
          });
        }
        VAR_1.filter(function (VAR_3) {
          var VAR_4 = false;
          try {
            VAR_4 = VAR_3.KEY_1.KEY_2.KEY_3["t3"].value === "1";
          } catch (VAR_5) {
          } finally {
            return VAR_4;
          }
        });
    }
};