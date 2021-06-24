namespace SpriteKind {
    export const background = SpriteKind.create()
    export const 按鈕 = SpriteKind.create()
    export const 道具 = SpriteKind.create()
    export const 人物 = SpriteKind.create()
}
function 遊戲內容 () {
    if (game_1 == 2) {
        scene.setBackgroundImage(assets.image`場景1`)
        scene.cameraShake(3, 1000)
        土壤1 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤2 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤3 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤4 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤5 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤6 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤7 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤8 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤9 = sprites.create(assets.image`坑洞1`, SpriteKind.background)
        土壤1.setPosition(40, 40)
        土壤2.setPosition(80, 40)
        土壤3.setPosition(120, 40)
        土壤4.setPosition(40, 60)
        土壤5.setPosition(80, 60)
        土壤6.setPosition(120, 60)
        土壤7.setPosition(40, 80)
        土壤8.setPosition(80, 80)
        土壤9.setPosition(120, 80)
        槌子 = sprites.create(assets.image`槌子`, SpriteKind.道具)
        controller.moveSprite(槌子)
        槌子.setStayInScreen(true)
        game.splash("控制方向鍵打擊地鼠")
    }
}
sprites.onOverlap(SpriteKind.道具, SpriteKind.按鈕, function (sprite, otherSprite) {
    if (otherSprite == 開始按鍵 && controller.A.isPressed()) {
        一開始 = 1
        遊戲頁面()
    }
    if (otherSprite == 繼續按鍵 && controller.A.isPressed()) {
        一開始 = 2
        遊戲頁面()
        遊戲內容()
    }
    if (otherSprite == 介紹按鍵 && controller.A.isPressed()) {
        一開始 = 3
        遊戲介紹()
    }
})
function 遊戲介紹 () {
    if (一開始 == 3) {
        scene.setBackgroundImage(assets.image`場景1`)
        介紹按鍵.destroy()
        開始按鍵.destroy()
        槌子.destroy()
        村民2 = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.人物)
        村民2.say("你好" + "這裡是遊戲介紹" + ("移動鍵盤" + "就可以打擊地鼠" + "並且打死20 40 60地鼠就會跳到下張地圖，並且更換道具" + "打死隻至100時遊戲結束"))
        槌子 = sprites.create(assets.image`槌子`, SpriteKind.道具)
        controller.moveSprite(槌子)
    }
}
function 遊戲頁面 () {
    if (一開始 == 0) {
        scene.setBackgroundImage(assets.image`22222`)
        開始按鍵 = sprites.create(assets.image`myImage3`, SpriteKind.按鈕)
        槌子 = sprites.create(assets.image`槌子`, SpriteKind.道具)
        開始按鍵.setPosition(80, 72)
        controller.moveSprite(槌子)
        槌子.setStayInScreen(true)
        介紹按鍵 = sprites.create(assets.image`myImage4`, SpriteKind.按鈕)
        介紹按鍵.setPosition(139, 15)
    }
    if (一開始 == 1) {
        槌子.destroy()
        開始按鍵.destroy()
        介紹按鍵.destroy()
        scene.setBackgroundImage(assets.image`場景1`)
        村民 = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 3 f f . . 
            . . f d f f 3 5 5 3 f d f . . . 
            . . . f f 3 3 3 3 3 f d f . . . 
            . . . f 3 3 5 3 3 5 3 f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.人物)
        繼續按鍵 = sprites.create(assets.image`myImage2`, SpriteKind.按鈕)
        槌子 = sprites.create(assets.image`槌子`, SpriteKind.道具)
        controller.moveSprite(槌子)
        槌子.setStayInScreen(true)
        村民.say("你好" + "勇者" + ("我們的村莊，因為在做實驗的時候病毒不小心外洩了" + "導致有一隻地鼠感染變異，之後就陸續擴散" + "現在我們需要你" + "請幫我們消滅地鼠吧" + "事成後我會答謝你的"))
    }
    if (一開始 == 2) {
        槌子.destroy()
        繼續按鍵.destroy()
        村民.destroy()
        scene.setBackgroundImage(assets.image`場景1`)
        game_1 = 2
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_1 == 2) {
        scene.setBackgroundImage(assets.image`3`)
    }
})
sprites.onOverlap(SpriteKind.道具, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        animation.runImageAnimation(
        槌子,
        assets.animation`會動的槌子`,
        200,
        false
        )
        if (info.score() >= 20) {
            animation.runImageAnimation(
            雲朵槌子,
            assets.animation`會動的雲朵垂`,
            200,
            false
            )
        }
        if (info.score() >= 40) {
            animation.runImageAnimation(
            鐮刀,
            assets.animation`myAnim`,
            200,
            false
            )
        }
        otherSprite.destroy(effects.ashes, 200)
        info.changeScoreBy(1)
    }
    if (info.score() == 20) {
        槌子.destroy()
        scene.setBackgroundImage(assets.image`藍藍的天`)
        雲朵槌子 = sprites.create(assets.image`雲朵武器`, SpriteKind.道具)
        雲朵槌子.setVelocity(150, 150)
        controller.moveSprite(雲朵槌子)
        雲朵槌子.setStayInScreen(true)
    }
    if (info.score() == 40) {
        雲朵槌子.destroy()
        scene.setBackgroundImage(assets.image`3`)
        土壤1.destroy()
        土壤2.destroy()
        土壤3.destroy()
        土壤4.destroy()
        土壤5.destroy()
        土壤6.destroy()
        土壤7.destroy()
        土壤8.destroy()
        土壤9.destroy()
        土壤21 = sprites.create(assets.image`火1`, SpriteKind.background)
        土壤20 = sprites.create(assets.image`myImage0`, SpriteKind.background)
        土壤19 = sprites.create(assets.image`火1`, SpriteKind.background)
        土壤10 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤11 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤12 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤13 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤14 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤15 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤16 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤17 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤18 = sprites.create(assets.image`坑洞2`, SpriteKind.background)
        土壤21.setPosition(141, 33)
        土壤19.setPosition(17, 21)
        土壤20.setPosition(93, 15)
        土壤10.setPosition(40, 40)
        土壤11.setPosition(80, 40)
        土壤12.setPosition(120, 40)
        土壤13.setPosition(40, 60)
        土壤14.setPosition(80, 60)
        土壤15.setPosition(120, 60)
        土壤16.setPosition(40, 80)
        土壤17.setPosition(80, 80)
        土壤18.setPosition(120, 80)
        鐮刀 = sprites.create(assets.image`鐮刀`, SpriteKind.道具)
        controller.moveSprite(鐮刀)
        鐮刀.setVelocity(200, 200)
        鐮刀.setStayInScreen(true)
    }
    if (info.score() == 100) {
        color.FadeToBlack.startScreenEffect()
        pause(3000)
        color.clearFadeEffect()
        game.over(true)
    }
})
let 芋頭: Sprite = null
let 粉粉: Sprite = null
let 小辣椒: Sprite = null
let 基本款: Sprite = null
let 水噹噹: Sprite = null
let random = 0
let pos9: number[] = []
let pos8: number[] = []
let pos7: number[] = []
let pos6: number[] = []
let pos5: number[] = []
let pos4: number[] = []
let pos3: number[] = []
let pos2: number[] = []
let pos1: number[] = []
let 殭屍: Sprite = null
let 土壤18: Sprite = null
let 土壤17: Sprite = null
let 土壤16: Sprite = null
let 土壤15: Sprite = null
let 土壤14: Sprite = null
let 土壤13: Sprite = null
let 土壤12: Sprite = null
let 土壤11: Sprite = null
let 土壤10: Sprite = null
let 土壤19: Sprite = null
let 土壤20: Sprite = null
let 土壤21: Sprite = null
let 鐮刀: Sprite = null
let 雲朵槌子: Sprite = null
let 村民: Sprite = null
let 村民2: Sprite = null
let 介紹按鍵: Sprite = null
let 繼續按鍵: Sprite = null
let 開始按鍵: Sprite = null
let 槌子: Sprite = null
let 土壤9: Sprite = null
let 土壤8: Sprite = null
let 土壤7: Sprite = null
let 土壤6: Sprite = null
let 土壤5: Sprite = null
let 土壤4: Sprite = null
let 土壤3: Sprite = null
let 土壤2: Sprite = null
let 土壤1: Sprite = null
let game_1 = 0
let 一開始 = 0
一開始 = 0
遊戲頁面()
遊戲內容()
遊戲介紹()
game.onUpdateInterval(5000, function () {
    if (info.score() >= 20) {
        殭屍 = sprites.create(assets.image`殭屍`, SpriteKind.Enemy)
        pos1 = [40, 36]
        pos2 = [80, 36]
        pos3 = [120, 36]
        pos4 = [40, 56]
        pos5 = [80, 56]
        pos6 = [120, 56]
        pos7 = [40, 76]
        pos8 = [80, 76]
        pos9 = [120, 76]
        random = randint(0, 8)
        if (random == 0) {
            殭屍.setPosition(pos1[0], pos1[1])
        } else if (random == 1) {
            殭屍.setPosition(pos2[0], pos2[1])
        } else if (random == 2) {
            殭屍.setPosition(pos3[0], pos3[1])
        } else if (random == 3) {
            殭屍.setPosition(pos4[0], pos4[1])
        } else if (random == 4) {
            殭屍.setPosition(pos5[0], pos5[1])
        } else if (random == 5) {
            殭屍.setPosition(pos6[0], pos6[1])
        } else if (random == 6) {
            殭屍.setPosition(pos7[0], pos7[1])
        } else if (random == 7) {
            殭屍.setPosition(pos8[0], pos8[1])
        } else if (random == 8) {
            殭屍.setPosition(pos9[0], pos9[1])
        }
    }
})
game.onUpdateInterval(7000, function () {
    if (info.score() >= 50) {
        水噹噹 = sprites.create(assets.image`水噹噹`, SpriteKind.Enemy)
        pos1 = [40, 36]
        pos2 = [80, 36]
        pos3 = [120, 36]
        pos4 = [40, 56]
        pos5 = [80, 56]
        pos6 = [120, 56]
        pos7 = [40, 76]
        pos8 = [80, 76]
        pos9 = [120, 76]
        random = randint(0, 8)
        if (random == 0) {
            水噹噹.setPosition(pos1[0], pos1[1])
        } else if (random == 1) {
            水噹噹.setPosition(pos2[0], pos2[1])
        } else if (random == 2) {
            水噹噹.setPosition(pos3[0], pos3[1])
        } else if (random == 3) {
            水噹噹.setPosition(pos4[0], pos4[1])
        } else if (random == 4) {
            水噹噹.setPosition(pos5[0], pos5[1])
        } else if (random == 5) {
            水噹噹.setPosition(pos6[0], pos6[1])
        } else if (random == 6) {
            水噹噹.setPosition(pos7[0], pos7[1])
        } else if (random == 7) {
            水噹噹.setPosition(pos8[0], pos8[1])
        } else if (random == 8) {
            水噹噹.setPosition(pos9[0], pos9[1])
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (game_1 == 2) {
        基本款 = sprites.create(assets.image`基本款`, SpriteKind.Enemy)
        pos1 = [40, 36]
        pos2 = [80, 36]
        pos3 = [120, 36]
        pos4 = [40, 56]
        pos5 = [80, 56]
        pos6 = [120, 56]
        pos7 = [40, 76]
        pos8 = [80, 76]
        pos9 = [120, 76]
        random = randint(0, 8)
        if (random == 0) {
            基本款.setPosition(pos1[0], pos1[1])
        } else if (random == 1) {
            基本款.setPosition(pos2[0], pos2[1])
        } else if (random == 2) {
            基本款.setPosition(pos3[0], pos3[1])
        } else if (random == 3) {
            基本款.setPosition(pos4[0], pos4[1])
        } else if (random == 4) {
            基本款.setPosition(pos5[0], pos5[1])
        } else if (random == 5) {
            基本款.setPosition(pos6[0], pos6[1])
        } else if (random == 6) {
            基本款.setPosition(pos7[0], pos7[1])
        } else if (random == 7) {
            基本款.setPosition(pos8[0], pos8[1])
        } else if (random == 8) {
            基本款.setPosition(pos9[0], pos9[1])
        }
    }
})
game.onUpdateInterval(4000, function () {
    if (info.score() >= 35) {
        小辣椒 = sprites.create(assets.image`小辣椒`, SpriteKind.Enemy)
        pos1 = [40, 36]
        pos2 = [80, 36]
        pos3 = [120, 36]
        pos4 = [40, 56]
        pos5 = [80, 56]
        pos6 = [120, 56]
        pos7 = [40, 76]
        pos8 = [80, 76]
        pos9 = [120, 76]
        random = randint(0, 8)
        if (random == 0) {
            小辣椒.setPosition(pos1[0], pos1[1])
        } else if (random == 1) {
            小辣椒.setPosition(pos2[0], pos2[1])
        } else if (random == 2) {
            小辣椒.setPosition(pos3[0], pos3[1])
        } else if (random == 3) {
            小辣椒.setPosition(pos4[0], pos4[1])
        } else if (random == 4) {
            小辣椒.setPosition(pos5[0], pos5[1])
        } else if (random == 5) {
            小辣椒.setPosition(pos6[0], pos6[1])
        } else if (random == 6) {
            小辣椒.setPosition(pos7[0], pos7[1])
        } else if (random == 7) {
            小辣椒.setPosition(pos8[0], pos8[1])
        } else if (random == 8) {
            小辣椒.setPosition(pos9[0], pos9[1])
        }
    }
})
forever(function () {
    music.setTempo(126)
    for (let index = 0; index < 2; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
    }
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
})
forever(function () {
    music.setTempo(126)
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Double))
        music.playTone(294, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(277, music.beat(BeatFraction.Double))
        music.playTone(277, music.beat(BeatFraction.Double))
        music.playTone(277, music.beat(BeatFraction.Double))
        music.playTone(277, music.beat(BeatFraction.Double))
    }
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
})
forever(function () {
    music.setTempo(126)
    for (let index = 0; index < 2; index++) {
        music.playTone(147, music.beat(BeatFraction.Breve))
        music.playTone(247, music.beat(BeatFraction.Breve))
        music.playTone(139, music.beat(BeatFraction.Breve))
        music.playTone(139, music.beat(BeatFraction.Breve))
    }
    music.playTone(147, music.beat(BeatFraction.Breve))
    music.playTone(165, music.beat(BeatFraction.Breve))
    music.playTone(139, music.beat(BeatFraction.Breve))
    music.playTone(139, music.beat(BeatFraction.Breve))
})
game.onUpdateInterval(8000, function () {
    if (info.score() >= 50) {
        粉粉 = sprites.create(assets.image`粉`, SpriteKind.Enemy)
        pos1 = [40, 36]
        pos2 = [80, 36]
        pos3 = [120, 36]
        pos4 = [40, 56]
        pos5 = [80, 56]
        pos6 = [120, 56]
        pos7 = [40, 76]
        pos8 = [80, 76]
        pos9 = [120, 76]
        random = randint(0, 8)
        if (random == 0) {
            粉粉.setPosition(pos1[0], pos1[1])
        } else if (random == 1) {
            粉粉.setPosition(pos2[0], pos2[1])
        } else if (random == 2) {
            粉粉.setPosition(pos3[0], pos3[1])
        } else if (random == 3) {
            粉粉.setPosition(pos4[0], pos4[1])
        } else if (random == 4) {
            粉粉.setPosition(pos5[0], pos5[1])
        } else if (random == 5) {
            粉粉.setPosition(pos6[0], pos6[1])
        } else if (random == 6) {
            粉粉.setPosition(pos7[0], pos7[1])
        } else if (random == 7) {
            粉粉.setPosition(pos8[0], pos8[1])
        } else if (random == 8) {
            粉粉.setPosition(pos9[0], pos9[1])
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (info.score() >= 50) {
        芋頭 = sprites.create(assets.image`芋頭`, SpriteKind.Enemy)
        pos1 = [40, 36]
        pos2 = [80, 36]
        pos3 = [120, 36]
        pos4 = [40, 56]
        pos5 = [80, 56]
        pos6 = [120, 56]
        pos7 = [40, 76]
        pos8 = [80, 76]
        pos9 = [120, 76]
        一開始 = randint(0, 8)
        if (random == 0) {
            芋頭.setPosition(pos1[0], pos1[1])
        } else if (random == 1) {
            芋頭.setPosition(pos2[0], pos2[1])
        } else if (random == 2) {
            芋頭.setPosition(pos3[0], pos3[1])
        } else if (random == 3) {
            芋頭.setPosition(pos4[0], pos4[1])
        } else if (random == 4) {
            芋頭.setPosition(pos5[0], pos5[1])
        } else if (random == 5) {
            芋頭.setPosition(pos6[0], pos6[1])
        } else if (random == 6) {
            芋頭.setPosition(pos7[0], pos7[1])
        } else if (random == 7) {
            芋頭.setPosition(pos8[0], pos8[1])
        } else if (random == 8) {
            芋頭.setPosition(pos9[0], pos9[1])
        }
    }
})
