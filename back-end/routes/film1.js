// 专门处理影片相关的接口
var express = require('express');
var router = express.Router();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

// 获取影片列表
router.get('/xqy',function(req, res) {
    var filmId = req.query.filmId;
    MongoClient.connect(url,function(err,client) {
        if(err) {
            res.json({
                code: 1,
                msg: '网络异常'
            })
        } else {
            var db = client.db('project');
            db.collection('xiangqing').find({
                filmId: parseInt(filmId)
            }).toArray(function(err, data) {
                if(err) {
                    res.json({
                        code: 1,
                        msg: '查询错误'
                    })
                } else {
                    res.json({
                        code: 0,
                        msg: 'ok',
                        details: data
                    })
                }
                client.close();
            })
        }
    })
})

module.exports = router;