/* 
1：中文搜索菜单
2: 排版修正
3：字数统计
*/

chrome.storage.local.get('func1_on', function (result) {
	var func1_on = result.func1_on;
	if (func1_on == undefined){
		func1_on = false
			chrome.storage.local.set({'func1_on': false})
		}
		if (func1_on){
		fun1(true)
		}
	});

    chrome.storage.local.get('func2_on', function (result) {
        var func2_on = result.func2_on;
        if (func2_on == undefined){
          func2_on = false
          chrome.storage.local.set({'func2_on': false})
        }
        if (func2_on){
        	fun2(true)
        }
    });

     chrome.storage.local.get('func3_on', function (result) {
        var func3_on = result.func3_on;
        if (func3_on == undefined){
          func3_on = false
          chrome.storage.local.set({'func3_on': false})
        }
        if (func3_on){
        	fun3(true)        
        }
    });



var lan = $("dd.language").text().trim()
var ch = $("dd.chapters").text().trim()
var originalWordcount

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
	if(message.stuff == "1"){
    	fun1(message.val)
	}
	else if(message.stuff == "2"){
		fun2(message.val)
	}
	else if (message.stuff == "3"){
		func3 = message.val
		fun3(message.val)
	}
});

function fun1(para1) {
	if (para1){
		$("label[for='work_search_query']").text("关键字")
		$("label[for='work_search_title']").text("标题")
		$("label[for='work_search_creator']").text("作者")
		$("label[for='work_search_revised_at']").text("最后修改时间")
		$("label[for='work_search_complete']").text("已完结")
		$("label[for='work_search_single_chapter']").text("单章作品")
		$("label[for='work_search_word_count']").text("字数")
		$("label[for='work_search_language_id']").text("语言")
		$("label[for='work_search_fandom_names_autocomplete']").text("原作")
		$("label[for='work_search_rating_ids']").text("分级")
		$('#work_search_rating_ids option[value="9"]').text("未分级")
		$('#work_search_rating_ids option[value="10"]').text("全年龄")
		$('#work_search_rating_ids option[value="11"]').text("青少年+")
		$('#work_search_rating_ids option[value="12"]').text("成人")
		$('#work_search_rating_ids option[value="13"]').text("边缘")
		$("label[for='warning_14']").text("作者不使用文库警告")
		$("label[for='warning_17']").text("以图像形式描绘的暴力内容")
		$("label[for='warning_18']").text("主要角色死亡")
		$("label[for='warning_16']").text("无文库警告")
		$("label[for='warning_19']").text("强奸/非自愿")
		$("label[for='warning_20']").text("未成年")
		$("label[for='category_116']").text("GL")
		$("label[for='category_22']").text("BG")
		$("label[for='category_21']").text("一般向")
		$("label[for='category_23']").text("BL")
		$("label[for='category_2246']").text("多角")
		$("label[for='category_24']").text("其他")
		$("label[for='work_search_character_names_autocomplete']").text("角色")
		$("label[for='work_search_relationship_names_autocomplete']").text("配对")
		$("label[for='work_search_freeform_names_autocomplete']").text("其他标签")
		$("label[for='work_search_hits']").text("点击")
		$("label[for='work_search_kudos_count']").text("赞")
		$("label[for='work_search_comments_count']").text("评论")
		$("label[for='work_search_bookmarks_count']").text("收藏")
		$("label[for='work_search_sort_column']").text("排序")
		$("label[for='work_search_sort_direction']").text("排序方向")
		$('#work_search_sort_column option:contains("Best Match")').text("最佳匹配")
		$('#work_search_sort_column option[value="authors_to_sort_on"]').text("作者")
		$('#work_search_sort_column option[value="title_to_sort_on"]').text("标题")
		$('#work_search_sort_column option[value="created_at"]').text("创造时间")
		$('#work_search_sort_column option[value="revised_at"]').text("最后修改时间")
		$('#work_search_sort_column option[value="word_count"]').text("字数统计")
		$('#work_search_sort_column option[value="hits"]').text("点击数")
		$('#work_search_sort_column option[value="kudos_count"]').text("赞数")
		$('#work_search_sort_column option[value="comments_count"]').text("评论数")
		$('#work_search_sort_column option[value="bookmarks_count"]').text("收藏数")
		$('#work_search_sort_direction option[value="asc"]').text("升序")
		$('#work_search_sort_direction option[value="desc"]').text("降序")
	}
	return
}

function fun2(para1){
	if (lan == "中文" && para1) {
		$("#workskin").css({"width": "600px","font-family": "Microsoft Yahei"})
		$("#workskin .userstuff").css({"text-align": "justify"})
	}
	else{
		$("#workskin").css({"width": "","font-family": ""})
		$("#workskin .userstuff").css({"text-align": ""})
	}
}

function fun3(para1){
	var articletext = $("#chapters .userstuff").text();
	var textlength = articletext.length;
	if (lan == "中文" && ch == "1/1" && para1) {
		originalWordcount = $("dd.words").text()
		$("dd.words").text(textlength)
	}
	else{
		$("dd.words").text(originalWordcount)
	}
	return
}

