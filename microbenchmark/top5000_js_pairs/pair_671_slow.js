const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: "Joe",
            KEY_2: "Blogs",
            KEY_3: "Betsy",
            KEY_4: "Karen",
            KEY_5: "Johnny",
            KEY_6: "Developer",
            KEY_7: "Super Awesome Developer",
            KEY_8: 30,
            KEY_9: 100,
          });
        }
        const VAR_3 = VAR_1.map((VAR_4) => {
          return Object.assign({}, VAR_4, { KEY_10: VAR_4.KEY_9 * 2 });
        });
    }
};