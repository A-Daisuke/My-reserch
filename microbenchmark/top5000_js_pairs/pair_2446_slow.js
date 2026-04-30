const Benchmark = {
    run: function() {
        this.VAR_1 = {
          KEY_1: "yolo",
          KEY_2: "doink",
        };
        this.VAR_2 = {
          KEY_3: "yolo panther",
          KEY_4: "doink",
        };
        this.VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          this.VAR_3.push(this.VAR_1.hasOwnProperty("title"));
        }
        if (VAR_4 !== 10000 && this.VAR_3.length !== 10000) {
          throw new Error("dce");
        }
    }
};