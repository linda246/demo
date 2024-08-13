//    [
//                 [117.024425, 32.585304, -12],
//                 [116.404366, 39.909099, 49.58],
//                 [116.404476, 39.9091, 49.58],
//                 [116.40458, 39.909129, 49.58],
//                 [116.404852, 39.909121, 49.58],
//                 [116.404978, 39.909099, 49.58],
//                 [116.405088, 39.909103, 49.58],
//                 [116.405186, 39.909129, 49.58]
//             ]

/**
 * 一个大括号代表一栋楼的一个单元
 */
const allList = [
    {
        build_no: '1号楼',
        unitNum: 1, // 这个代表是几单元
        position: [117.024423, 32.5853, -11.6],
        mz: 90, // 这个代表是坐标
        detail: [
            // 这个代表是这栋楼的每层的信息
            {
                layers: 1, //这个代表几楼
                attribute: {
                    //这个代表属性
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 5,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 6,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 7,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 8,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 9,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 10,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 11,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 12,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 13,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 14,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 15,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 16,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 17,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 18,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 19,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 20,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 21,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 22,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 23,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 24,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 25, //这个代表几楼
                attribute: {
                    //这个代表属性
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 26,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 27,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 28,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 29,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 30,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 31,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 32,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 33,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 34,
                attribute: {
                    build_no: '1号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    {
        unitNum: 2,
        position: [117.02451, 32.58528, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 5,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 6,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 7,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 8,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 9,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 10,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 11,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 12,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 13,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 14,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 15,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 16,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 17,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 18,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 19,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 20,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 21,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 22,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 23,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 24,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 25,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 26,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 27,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 28,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 29,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 30,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 31,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 32,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 33,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 34,
                attribute: {
                    build_no: '1号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    {
        unitNum: 3,
        position: [117.024619, 32.585278, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 5,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 6,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 7,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 8,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 9,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 10,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 11,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 12,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 13,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 14,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 15,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 16,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 17,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 18,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 19,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 20,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 21,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 22,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 23,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 24,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 25,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 26,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 27,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 28,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 29,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 30,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 31,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 32,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 33,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 34,
                attribute: {
                    build_no: '1号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    {
        unitNum: 4,
        position: [117.024723, 32.585302, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 5,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 6,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 7,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 8,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 9,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 10,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 11,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 12,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 13,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 14,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 15,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 16,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 17,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 18,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 19,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 20,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 21,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 22,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 23,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 24,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 25,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 26,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 27,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 28,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 29,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 30,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 31,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 32,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 33,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 34,
                attribute: {
                    build_no: '1号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    // 2号楼
    {
        unitNum: 1,
        position: [117.024973, 32.5853, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 5,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 6,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 7,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 8,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 9,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 10,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 11,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 12,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 13,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 14,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 15,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 16,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 17,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 18,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 19,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 20,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 21,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 22,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 23,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 24,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 25,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 26,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 27,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 28,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 29,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 30,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 31,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 32,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 33,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 34,
                attribute: {
                    build_no: '2号楼',
                    unit: '1单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    {
        unitNum: 2,
        position: [117.025071, 32.585278, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '2号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '2号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '2号楼',
                    unit: '2单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '2号楼',
                    unit: '2单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    {
        unitNum: 3,
        position: [117.025176, 32.585277, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '2号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '2号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '2号楼',
                    unit: '3单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '2号楼',
                    unit: '3单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
    {
        unitNum: 4,
        position: [117.025277, 32.585302, -11.6],
        mz: 90,
        detail: [
            {
                layers: 1,
                attribute: {
                    build_no: '2号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '抵押',
                    area: '100平',
                },
            },
            {
                layers: 2,
                attribute: {
                    build_no: '2号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
            {
                layers: 3,
                attribute: {
                    build_no: '2号楼',
                    unit: '4单元',
                    name: '张三',
                    condition: '查封',
                    area: '100平',
                },
            },
            {
                layers: 4,
                attribute: {
                    build_no: '2号楼',
                    unit: '4单元',
                    name: '赵四',
                    condition: '可售',
                    area: '100平',
                },
            },
        ],
    },
]
