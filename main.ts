namespace SpriteKind {
    export const door = SpriteKind.create()
    export const door1 = SpriteKind.create()
    export const enemylvl2 = SpriteKind.create()
    export const downdoor0 = SpriteKind.create()
    export const boss_stage_1 = SpriteKind.create()
    export const person = SpriteKind.create()
    export const range = SpriteKind.create()
    export const enemylvl4 = SpriteKind.create()
    export const enemysightrange = SpriteKind.create()
    export const door2 = SpriteKind.create()
    export const enemynormal = SpriteKind.create()
    export const door3 = SpriteKind.create()
    export const bossstage2 = SpriteKind.create()
    export const teleportdoor00 = SpriteKind.create()
    export const knight = SpriteKind.create()
    export const camrea_anamamtion = SpriteKind.create()
    export const house = SpriteKind.create()
    export const door4 = SpriteKind.create()
    export const Charlie = SpriteKind.create()
    export const basicenenemy = SpriteKind.create()
    export const teleport = SpriteKind.create()
    export const dungenenemy01 = SpriteKind.create()
    export const gladiater = SpriteKind.create()
    export const riker = SpriteKind.create()
    export const villagedoor = SpriteKind.create()
    export const knights_door = SpriteKind.create()
    export const teleportdoor01 = SpriteKind.create()
    export const Eli = SpriteKind.create()
    export const rikerbossfight = SpriteKind.create()
    export const explosoin = SpriteKind.create()
    export const Text = SpriteKind.create()
}
namespace StatusBarKind {
    export const enemyhealth1 = StatusBarKind.create()
    export const bosshealth = StatusBarKind.create()
    export const enemyhealth3 = StatusBarKind.create()
    export const gold = StatusBarKind.create()
    export const Enemyhealth0 = StatusBarKind.create()
    export const bosshealth2 = StatusBarKind.create()
    export const basicenenemyhealth1 = StatusBarKind.create()
    export const doungenEhp01 = StatusBarKind.create()
    export const gladiaterhp00 = StatusBarKind.create()
    export const rikerhp = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(37, 9), sprites.dungeon.greenSwitchUp)
        tiles.setWallAt(tiles.getTileLocation(50, 16), false)
        tiles.setTileAt(tiles.getTileLocation(50, 16), assets.tile`myTile2`)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.enemylvl4, SpriteKind.Player, function (sprite, otherSprite) {
    pause(200)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.basicenenemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite12)
    statusbar8.value += -6
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Charlie, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("I love kitties.", DialogLayout.Bottom)
        sprites.destroy(mySprite2)
        statusbar.value += -10
        tiles.setCurrentTilemap(tilemap`teleporter map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 16), randint(0, 16)))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level63`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 1))
})
sprites.onOverlap(SpriteKind.rikerbossfight, SpriteKind.explosoin, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.rings, 500)
    statusbar11.value += randint(-10, -99)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemysightrange, function (sprite, otherSprite) {
    mySprite4.follow(mySprite, 36)
    sprites.destroy(mySprite7, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`knights camp`)
    mySprite9 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4e999999e44ee66c4eddddddde666
        666ed55d55de4c66f4e99999999994ee66c4ed55d55de666
        666ed44d44de4c66f4e9999999999eee66c4ed44d44de666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        666ed55d55de4c66e4e44e44e44e44ee66c4ed55d55de666
        c66ed44d44de4c66e4e44e44e44e44ee66c4ed44d44de66c
        c666666666664c66e4e44e44e44feeee66c466666666666c
        cc66444444444c66e4e44e44e44ffffe66c44444444466cc
        .c664eee4eee4c66f4e44e44e44f44fe66c4eee4eee466c.
        ..c64eee4eee4c66f4e44e44e44effee66c4eee4eee46c..
        ...c644444444c66f4e44e44e44e44ee66c4444444446...
        .....64eee444c66f4e44e44e44e44ee66c444eee446....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc66.....
        `, SpriteKind.house)
    mySprite2 = sprites.create(assets.image`doorup`, SpriteKind.door4)
    mySprite6 = sprites.create(assets.image`knight`, SpriteKind.knight)
    mySprite3 = sprites.create(assets.image`door`, SpriteKind.villagedoor)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 17))
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(7, 2))
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(15, 5))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(10, 0))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(29, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blacksmiths sign`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("The sign says: blacksmith's shop.", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Food-steps`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mainhealth.value < 100) {
            if (statusbar.value >= 4) {
                game.showLongText("let's see...", DialogLayout.Bottom)
                game.showLongText("how much do you want healed?", DialogLayout.Bottom)
                game.showLongText(game.askForNumber("", 2), DialogLayout.Bottom)
                game.showLongText("", DialogLayout.Bottom)
                game.showLongText("", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("you are at full health already", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(43, 12))
        }
    }
    if (controller.B.isPressed()) {
        game.showLongText("ow!", DialogLayout.Bottom)
        game.showLongText("stop that!", DialogLayout.Bottom)
        mySprite.y += 10
    }
})
statusbars.onZero(StatusBarKind.doungenEhp01, function (status) {
    sprites.destroy(mySprite4, effects.spray, 500)
    statusbar.value += randint(2, 8)
    tiles.setTileAt(tiles.getTileLocation(15, 7), assets.tile`myTile43`)
    tiles.setWallAt(tiles.getTileLocation(15, 7), false)
})
statusbars.onZero(StatusBarKind.rikerhp, function (status) {
    sprites.destroy(mySprite11)
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . e e e 
        . . . . . . c d d c . . c d d c 
        . . . . . . c b d d f f d d b c 
        . . . . . . c 3 b d b d d b 3 c 
        . . . . . . f b 3 d d d d 3 b f 
        . . . . . . e d d d d d d d d e 
        . . b f b . e d 2 f d d f 2 d e 
        . . f d f . f d d d d d d d d f 
        . . f d f f b 2 d d b b d d b f 
        . . f b d b b d 2 2 2 2 2 2 f . 
        . . . f f f f d d d d d d d f . 
        . . . . . . . f d f d f f d b b 
        . . . . . . . f f f f f f b b . 
        . . . . . . . . . . . . . b . b 
        . . . . . . . . . . . . . . . . 
        `)
    pause(487)
    mySprite.setImage(assets.image`cat`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`food sign`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("the sign says: buy food here!", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTeleportor2`, function (sprite, location) {
    game.splash("boss fight!", "with the snake king")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(37, 9))
    mySprite4 = sprites.create(assets.image`snake king`, SpriteKind.bossstage2)
    tiles.placeOnRandomTile(mySprite4, assets.tile`red flowers spawn`)
    statusbar7 = statusbars.create(20, 4, StatusBarKind.bosshealth2)
    statusbar7.value = 53
    statusbar7.attachToSprite(mySprite4)
    mySprite4.follow(mySprite)
    statusbar7.max = 53
})
statusbars.onZero(StatusBarKind.bosshealth, function (status) {
    sprites.destroy(mySprite4, effects.fire, 5000)
    pause(2000)
    game.splash("stage 1 complete. entering stage 2.", "entering level 4.")
    tiles.setCurrentTilemap(tilemap`level0`)
    mySprite.setPosition(14, 13)
    mainhealth.value = 100
    mySprite5 = sprites.create(assets.image`Villager`, SpriteKind.person)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(29, 33))
    mySprite6 = sprites.create(assets.image`range`, SpriteKind.range)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(29, 33))
    mySprite6.changeScale(4, ScaleAnchor.Middle)
    statusbar.value += randint(2, 9)
    info.changeLifeBy(1)
})
statusbars.onZero(StatusBarKind.gladiaterhp00, function (status) {
    sprites.destroy(mySprite4)
    tiles.setCurrentTilemap(tilemap`level81`)
    mySprite2 = sprites.create(assets.image`doorup`, SpriteKind.teleport)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 0))
})
statusbars.onZero(StatusBarKind.Enemyhealth0, function (status) {
    sprites.destroy(mySprite4)
    mySprite8 = sprites.create(assets.image`door1`, SpriteKind.door3)
    statusbar.value += randint(3, 9)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(110, 41))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rikerbossfight, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar11.value += randint(-1, -6) + claw_extenders
        mainhealth.value += randint(0, 3)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level61`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, randint(8, 7)))
    mySprite4 = sprites.create(assets.image`witch`, SpriteKind.basicenenemy)
    statusbar8 = statusbars.create(20, 4, StatusBarKind.basicenenemyhealth1)
    statusbar8.value = 41
    statusbar8.max = 42
    statusbar8.attachToSprite(mySprite4)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(18, 5))
    mySprite4.follow(mySprite, 49)
    mySprite3 = sprites.create(assets.image`door1`, SpriteKind.teleport)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(31, 5))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemylvl4, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar5.value += randint(-2, -4)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level79`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 2))
    mySprite4 = sprites.create(assets.image`gladeater`, SpriteKind.gladiater)
    statusbar10 = statusbars.create(20, 4, StatusBarKind.gladiaterhp00)
    statusbar10.value = 40
    statusbar10.attachToSprite(mySprite4)
    mySprite4.follow(mySprite, 79)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(18, 18))
    statusbar10.max = 40
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`bush_maze`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    mySprite2 = sprites.create(assets.image`door1`, SpriteKind.teleport)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 16))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setWallAt(tiles.getTileLocation(13, 14), false)
        tiles.setTileAt(tiles.getTileLocation(1, 31), sprites.dungeon.greenSwitchUp)
        tiles.setTileAt(tiles.getTileLocation(13, 14), sprites.dungeon.stairLadder)
    }
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.enemynormal, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar6.value += -5
})
sprites.onOverlap(SpriteKind.gladiater, SpriteKind.Player, function (sprite, otherSprite) {
    pause(randint(111, 333))
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.enemylvl4, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar5.value += -5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(7, 15), assets.tile`myTile53`)
        tiles.setTileAt(tiles.getTileLocation(4, 15), assets.tile`myTile54`)
        tiles.setWallAt(tiles.getTileLocation(4, 15), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gold-sellers steps`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("you want gold?", DialogLayout.Bottom)
        game.showLongText("What do you have to offer?", DialogLayout.Bottom)
        game.showLongText("For all that I could give you... let me see...", DialogLayout.Bottom)
        game.showLongText("twenty eight gold", DialogLayout.Bottom)
        game.showLongText("Here you go!", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(15, 29), assets.tile`steps`)
        tiles.setTileAt(tiles.getTileLocation(16, 29), assets.tile`steps`)
        tiles.setTileAt(tiles.getTileLocation(17, 29), assets.tile`steps`)
        tiles.setTileAt(tiles.getTileLocation(18, 29), assets.tile`steps`)
        statusbar.attachToSprite(mySprite)
        statusbar.value += randint(21, 46)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level42`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    game.showLongText("get ready for a boss fight", DialogLayout.Full)
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.boss_stage_1)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile13)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.bosshealth)
    statusbar4.value = 22
    statusbar4.attachToSprite(mySprite4)
    pause(2000)
    mySprite4.follow(mySprite, 89)
    statusbar4.max = 22
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile16)
})
sprites.onOverlap(SpriteKind.enemynormal, SpriteKind.Player, function (sprite, otherSprite) {
    pause(213)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.knights_door, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.knights_door)
    tiles.setCurrentTilemap(tilemap`knights camp`)
    mySprite2 = sprites.create(assets.image`doorup`, SpriteKind.door4)
    mySprite3 = sprites.create(assets.image`door`, SpriteKind.villagedoor)
    mySprite6 = sprites.create(assets.image`knight`, SpriteKind.knight)
    mySprite9 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4e999999e44ee66c4eddddddde666
        666ed55d55de4c66f4e99999999994ee66c4ed55d55de666
        666ed44d44de4c66f4e9999999999eee66c4ed44d44de666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        666ed55d55de4c66e4e44e44e44e44ee66c4ed55d55de666
        c66ed44d44de4c66e4e44e44e44e44ee66c4ed44d44de66c
        c666666666664c66e4e44e44e44feeee66c466666666666c
        cc66444444444c66e4e44e44e44ffffe66c44444444466cc
        .c664eee4eee4c66f4e44e44e44f44fe66c4eee4eee466c.
        ..c64eee4eee4c66f4e44e44e44effee66c4eee4eee46c..
        ...c644444444c66f4e44e44e44e44ee66c4444444446...
        .....64eee444c66f4e44e44e44e44ee66c444eee446....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc66.....
        `, SpriteKind.house)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 2))
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 17))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(9, 0))
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(7, 2))
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(15, 5))
})
statusbars.onZero(StatusBarKind.enemyhealth1, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.enemylvl2, effects.spray, 5000)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level2-3`)
    mySprite.setPosition(43, 3)
    mainhealth.value += 20
    statusbar.value += randint(1, 2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level-2 forest abyss`)
    mySprite.setPosition(7, 3)
})
statusbars.onZero(StatusBarKind.enemyhealth3, function (status) {
    sprites.destroy(mySprite4, effects.fountain, 1000)
    statusbar.value += randint(0, 1)
    pause(3000)
    game.showLongText("thank you I will bring you to my village and get you healed!", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`village1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 20))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(66, 19))
    mainhealth.value = 100
    statusbar.value += randint(2, 9)
    mySprite5.setImage(assets.image`person`)
    mySprite6 = sprites.create(assets.image`door1`, SpriteKind.door2)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(99, 20))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, randint(0, 15)))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level91`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 2; index++) {
        mySprite4 = sprites.create(img`
            . 7 f f f . 7 . . . 7 . . 7 . 7 
            f f f c c . . . 7 7 . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 2 4 b 4 2 b c b b c b b c . 
            c b b b b b b b b b c c c b c 7 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . 7 
            f f f f f f f b b b b f c . 7 . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . 7 
            . . f 2 2 2 b b b c f . . 7 7 . 
            . . . f f f f f f f . 7 7 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.basicenenemy)
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 3))
        statusbar8 = statusbars.create(10, 3, StatusBarKind.basicenenemyhealth1)
        statusbar8.attachToSprite(mySprite4)
        statusbar8.value = 33
        statusbar8.max = 33
        mySprite4.follow(mySprite, randint(25, 100))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemynormal, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar6.value += claw_extenders + randint(-3, -5)
        mySprite4.follow(mySprite)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`WL`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 1))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 27))
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.bossstage2, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.rings, 500)
    statusbar7.value += -7
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blacksmiths shop`, function (sprite, location) {
    if (controller.A.isPressed()) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        game.showLongText("Got gold?", DialogLayout.Bottom)
        if (statusbar.value >= 20) {
            game.showLongText("let's see for that I could give you...", DialogLayout.Bottom)
            game.showLongText("a claw extender.", DialogLayout.Bottom)
            game.showLongText("Which gives +1 damage.", DialogLayout.Bottom)
            if (controller.B.isPressed()) {
                game.showLongText("No? ok.", DialogLayout.Bottom)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 12))
            }
            pause(1000)
            game.showLongText("all yours.", DialogLayout.Bottom)
            statusbar.value += -20
            claw_extenders += -1
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            game.showLongText("you got the claw extender!", DialogLayout.Bottom)
            game.showLongText("The claw extender increases the amount of damage you deal per attack by one. Despite its name it does not increase attack range.", DialogLayout.Full)
            pause(500)
            game.showLongText("bye!", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 12))
        } else {
            game.showLongText("then leave!!", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 19))
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    mySprite.setImage(assets.image`cat`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    mySprite.setImage(assets.image`catL`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleportdoor00, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level38`)
    sprites.destroyAllSpritesOfKind(SpriteKind.teleportdoor00)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight5)
    mySprite2 = sprites.create(assets.image`door1`, SpriteKind.door3)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 5))
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.enemylvl2, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar3.value += -6
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 8))
        tiles.setCurrentTilemap(tilemap`level45`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.knight, function (sprite, otherSprite) {
    if (seal_Hole == 1) {
        if (controller.A.isPressed()) {
            game.showLongText("we have sealed the hole", DialogLayout.Bottom)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level65`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.house, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite2)
        sprites.destroy(mySprite9)
        sprites.destroy(mySprite3)
        sprites.destroy(mySprite6)
        if (mapv >= 20) {
            game.splash("program error: stack overflow")
            tiles.setCurrentTilemap(tilemap`level85`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            mySprite10 = sprites.create(assets.image`riker`, SpriteKind.riker)
        } else {
            tiles.setCurrentTilemap(tilemap`Charlies_shop`)
            mySprite2 = sprites.create(assets.image`charlie`, SpriteKind.Charlie)
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 1))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 7))
        }
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite4)
    game.splash("next level?")
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Eli, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("naw bro thats wild how many people have you killed", DialogLayout.Bottom)
        game.showLongText("here you'll need this.", DialogLayout.Bottom)
        info.setLife(9)
        game.showLongText("bye!", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.Eli)
        tiles.setCurrentTilemap(tilemap`the prison`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 8))
        mainhealth.value = 99
    }
})
sprites.onOverlap(SpriteKind.bossstage2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(200)
    mainhealth.value += -3
    pause(50)
    mainhealth.value += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(2, 0), sprites.dungeon.greenSwitchUp)
        tiles.setWallAt(tiles.getTileLocation(8, 6), false)
        tiles.setWallAt(tiles.getTileLocation(9, 6), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand9, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`forest maze`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    mySprite3 = sprites.create(assets.image`door1`, SpriteKind.teleport)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(19, 19))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    mainhealth.value = 99
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 15), randint(0, 10)))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    mainhealth.value += -1
    tiles.setWallAt(tiles.getTileLocation(28, 10), true)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 10))
    game.showLongText("So you came from a dungeon? once the other knights get back we will seal it up.", DialogLayout.Bottom)
    seal_Hole = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.basicenenemy)
    tiles.setCurrentTilemap(tilemap`Elisdungen`)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . e e e e e . . . . . 
        . . e e e e f e e e . . . 
        . . e f e e e f f e . . . 
        . e f e e e b b b e . . . 
        . e e e e b b f f e e . . 
        . e e 8 f b b f 8 e e . . 
        . . d 9 f d d f 8 d . . . 
        . . d d d d d d d d . . . 
        . . 7 7 9 9 9 9 7 7 . . . 
        . d 7 9 7 7 7 7 9 7 d . . 
        d 4 7 7 7 7 7 7 7 7 4 d . 
        d d 7 6 6 6 6 6 6 7 d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Eli)
    scene.cameraShake(4, 500)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 6))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`small grass`, function (sprite, location) {
    game.splash("have fun out there")
    tiles.setCurrentTilemap(tilemap`forest-1`)
    mySprite.setPosition(106, 3)
    mySprite2 = sprites.create(assets.image`door1`, SpriteKind.door)
    mySprite2.setPosition(251, 232)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemylvl2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar3.value += -3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossstage2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar7.value += randint(-2, -5) + claw_extenders
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level67`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    mySprite3 = sprites.create(assets.image`door1`, SpriteKind.teleport)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(17, 17))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`WR`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 15), randint(0, 10)))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss_stage_1, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar4.value += -3
        mainhealth.value += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`teleporter1`, function (sprite, location) {
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.enemylvl2)
    statusbar3 = statusbars.create(15, 3, StatusBarKind.enemyhealth1)
    statusbar3.attachToSprite(mySprite4)
    statusbar3.value = 16
    game.splash("get ready to battle!")
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile1)
    pause(500)
    mySprite4.follow(mySprite, 74)
    statusbar3.max = 16
    tiles.placeOnRandomTile(mySprite, sprites.skillmap.islandTile7)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setWallAt(tiles.getTileLocation(2, 4), false)
        tiles.setWallAt(tiles.getTileLocation(6, 4), false)
        tiles.setWallAt(tiles.getTileLocation(10, 4), false)
        tiles.setWallAt(tiles.getTileLocation(14, 4), false)
        tiles.setWallAt(tiles.getTileLocation(18, 4), false)
        tiles.setWallAt(tiles.getTileLocation(22, 4), false)
        tiles.setWallAt(tiles.getTileLocation(26, 4), false)
        tiles.setWallAt(tiles.getTileLocation(30, 4), false)
        tiles.setWallAt(tiles.getTileLocation(34, 4), false)
        tiles.setWallAt(tiles.getTileLocation(38, 4), false)
        tiles.setWallAt(tiles.getTileLocation(42, 4), false)
        tiles.setWallAt(tiles.getTileLocation(46, 4), false)
        tiles.setWallAt(tiles.getTileLocation(49, 4), false)
        tiles.setWallAt(tiles.getTileLocation(2, 11), false)
        tiles.setWallAt(tiles.getTileLocation(8, 11), false)
        tiles.setWallAt(tiles.getTileLocation(16, 11), false)
        tiles.setWallAt(tiles.getTileLocation(24, 11), false)
        tiles.setWallAt(tiles.getTileLocation(31, 11), false)
        tiles.setWallAt(tiles.getTileLocation(40, 11), false)
        tiles.setWallAt(tiles.getTileLocation(47, 11), false)
        tiles.setTileAt(tiles.getTileLocation(47, 11), assets.tile`myTile61`)
        tiles.setTileAt(tiles.getTileLocation(24, 11), assets.tile`myTile61`)
        tiles.setTileAt(tiles.getTileLocation(40, 11), assets.tile`myTile61`)
        tiles.setTileAt(tiles.getTileLocation(47, 12), assets.tile`myTile60`)
        tiles.setTileAt(tiles.getTileLocation(24, 12), assets.tile`myTile60`)
        tiles.setTileAt(tiles.getTileLocation(40, 12), assets.tile`myTile60`)
        mySprite11 = sprites.create(assets.image`riker`, SpriteKind.rikerbossfight)
        tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`myTile58`)
        tiles.setTileAt(tiles.getTileLocation(0, 8), assets.tile`myTile58`)
        tiles.placeOnRandomTile(mySprite11, sprites.dungeon.floorMixed)
        statusbar11 = statusbars.create(20, 4, StatusBarKind.rikerhp)
        statusbar11.attachToSprite(mySprite11)
        statusbar11.max = 4096
        statusbar11.value = 4096
        mySprite11.follow(mySprite, randint(1, 100))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villagedoor, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.villagedoor)
    tiles.setCurrentTilemap(tilemap`village1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(61, 36))
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        d d d d d d d d d d d d d d d d 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.knights_door)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(61, 39))
    tiles.setWallAt(tiles.getTileLocation(52, 16), true)
})
statusbars.onZero(StatusBarKind.basicenenemyhealth1, function (status) {
    sprites.destroy(mySprite4)
    statusbar.value += randint(3, 9)
    mainhealth.value += randint(0, 1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(randint(112, 374))
    mainhealth.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door bottom`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`house`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 15))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door1, function (sprite, otherSprite) {
    game.showLongText("If stuck on one tile island press A", DialogLayout.Bottom)
    game.showLongText("To attack press B", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.door1)
    tiles.setCurrentTilemap(tilemap`battle-1`)
    game.splash("battle!!!", "get ready. then press A to begin.")
    tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    mySprite4 = sprites.create(assets.image`monster`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile13)
    statusbar2 = statusbars.create(15, 3, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(mySprite4)
    mainhealth.value = 100
    statusbar2.value = 15
    mySprite4.follow(mySprite, 58)
    statusbar2.max = 15
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level77`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    mySprite3 = sprites.create(assets.image`doorup`, SpriteKind.teleport)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 19))
})
sprites.onOverlap(SpriteKind.dungenenemy01, SpriteKind.Player, function (sprite, otherSprite) {
    pause(randint(100, 398))
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.basicenenemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar8.value += claw_extenders + randint(-1, -5)
    }
})
controller.combos.attachCombo("BB+A", function () {
    mySprite12 = sprites.create(assets.image`boom`, SpriteKind.explosoin)
    tiles.placeOnTile(mySprite12, mySprite.tilemapLocation())
    mySprite12.follow(mySprite, 600)
    mySprite12.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`forest level-1 stage-2`)
    mySprite.setPosition(0, 39)
    mySprite3 = sprites.create(assets.image`door1`, SpriteKind.door1)
    mySprite3.setPosition(251, 25)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.range, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.range)
    game.showLongText("please help me!", DialogLayout.Bottom)
    game.showLongText("The monsters are blocking the way home!", DialogLayout.Bottom)
    game.showLongText("please get rid of them!", DialogLayout.Bottom)
    game.showLongText("I'll show you where they are.", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`path to village stage1 level4`)
    game.showLongText("they are this way. PLEASE defeat them. PLEASE! this is how I got stuck: I was just on a hunting trip and when I came back they were blocking the way!", DialogLayout.Full)
    mySprite4 = sprites.create(assets.image`monster snake lvl 4`, SpriteKind.enemylvl4)
    mySprite7 = sprites.create(assets.image`snake sight range`, SpriteKind.enemysightrange)
    statusbar5 = statusbars.create(14, 4, StatusBarKind.enemyhealth3)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(35, 7))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 7))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(0, 7))
    statusbar5.attachToSprite(mySprite4)
    statusbar5.value = 19
    mySprite5.sayText("this is as far as I am going.", 5000, false)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(35, 7))
    mySprite7.setScale(6, ScaleAnchor.Middle)
    statusbar5.max = 19
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(42, 38))
    mySprite5 = sprites.create(img`
        . . . . . . . . b b . . . 2 . . 
        . . . . . . . . b b . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . b d d b . 2 . . . . . b b . 
        . b d d d b . . . . . . b d d b 
        . b d d b . . . . b b . b d d b 
        . b b b . . . . . b b . . b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b d d d d d d b b b . . 
        . b d c c c b b b b c c d d b . 
        b d d c b . . . . . b c c d d b 
        c d d b b . . . . . . b c d d c 
        c b d d d b b . . . . b d d c c 
        . c c b d d d d b . c c c c c c 
        . . . c c c c c c 2 2 . . . . . 
        `, SpriteKind.teleportdoor00)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(48, 41))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dungenenemy01, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar9.value += claw_extenders + randint(-2, -4)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile19, function (sprite, location) {
    mySprite.setPosition(62, -3)
    tiles.setCurrentTilemap(tilemap`level-3`)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(3, 1), sprites.dungeon.darkGroundCenter)
        claw_extenders += -3
        sprites.destroy(mySprite5)
        pause(1000)
        tiles.setCurrentTilemap(tilemap`level36`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    }
})
sprites.onOverlap(SpriteKind.enemylvl2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(110)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gladiater, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar10.value += randint(-2, -5) + claw_extenders
    }
})
sprites.onOverlap(SpriteKind.boss_stage_1, SpriteKind.Player, function (sprite, otherSprite) {
    pause(138)
    mainhealth.value += -2
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.boss_stage_1, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar4.value += -5
})
sprites.onOverlap(SpriteKind.rikerbossfight, SpriteKind.Player, function (sprite, otherSprite) {
    pause(randint(111, 333))
    mainhealth.value += randint(0, -4)
    statusbar.value += randint(0, randint(0, randint(0, randint(0, -3))))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door3, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`final boos stage 2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.door3)
})
statusbars.onZero(StatusBarKind.bosshealth2, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.bossstage2, effects.ashes, 2000)
    pause(3968)
    game.splash("stage 2 Boss defeted")
    tiles.setCurrentTilemap(tilemap`level40`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    mainhealth.value = 100
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 15), randint(0, 10)))
})
sprites.onOverlap(SpriteKind.explosoin, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar2.value += -6
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.door2)
    sprites.destroyAllSpritesOfKind(SpriteKind.person, effects.smiles, 100)
    tiles.setCurrentTilemap(tilemap`lvl 4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    mySprite4 = sprites.create(assets.image`monster snake lvl 4`, SpriteKind.enemynormal)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(95, 41))
    statusbar6 = statusbars.create(12, 3, StatusBarKind.Enemyhealth0)
    statusbar6.attachToSprite(mySprite4)
    statusbar6.value = 24
})
sprites.onOverlap(SpriteKind.basicenenemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(randint(99, 123))
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door4, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level40`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 40))
    sprites.destroy(mySprite9)
    sprites.destroyAllSpritesOfKind(SpriteKind.door4)
    sprites.destroy(mySprite3)
    if (seal_Hole == 1) {
        tiles.placeOnTile(mySprite6, tiles.getTileLocation(77, 9))
        tiles.setTileAt(tiles.getTileLocation(75, 9), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(75, 8), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(75, 10), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(74, 9), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(76, 9), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(74, 8), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(76, 8), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(76, 10), sprites.castle.tileGrass1)
        tiles.setTileAt(tiles.getTileLocation(74, 10), sprites.castle.tileGrass1)
        mySprite2 = sprites.create(assets.image`doorup`, SpriteKind.knights_door)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 40))
    } else {
        sprites.destroy(mySprite6)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.splash("you escaped the spirits lair", "and moved on to level 2")
    tiles.setCurrentTilemap(tilemap`level-2 sky forest`)
    mainhealth.value += 24
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleport, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`knights camp`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, randint(5, 6)))
    mySprite9 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4e999999e44ee66c4eddddddde666
        666ed55d55de4c66f4e99999999994ee66c4ed55d55de666
        666ed44d44de4c66f4e9999999999eee66c4ed44d44de666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        666ed55d55de4c66e4e44e44e44e44ee66c4ed55d55de666
        c66ed44d44de4c66e4e44e44e44e44ee66c4ed44d44de66c
        c666666666664c66e4e44e44e44feeee66c466666666666c
        cc66444444444c66e4e44e44e44ffffe66c44444444466cc
        .c664eee4eee4c66f4e44e44e44f44fe66c4eee4eee466c.
        ..c64eee4eee4c66f4e44e44e44effee66c4eee4eee46c..
        ...c644444444c66f4e44e44e44e44ee66c4444444446...
        .....64eee444c66f4e44e44e44e44ee66c444eee446....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc66.....
        `, SpriteKind.house)
    mySprite6 = sprites.create(img`
        ........................
        .......22...............
        ......2222..............
        .....eeeeee.............
        ....e222222e............
        ...ebffbbffbe...........
        ....bbbbbbbb........ccc.
        ...efbfbbfbfe......cddc.
        ...efbfbbfbfe.....cddc..
        ..ee4ddbbdd4ee..ccddc...
        .d.eb4dddd4ee..ecddc....
        .bebee4444eeb.ddccc.....
        .be4.bbbbbb.1bdde.......
        .c...bbbbbb.b4beb.......
        .....dbbbbd.............
        .....bb..bb.............
        .....bb..bb.............
        .....dd..dd.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.knight)
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(15, 5))
    mySprite2 = sprites.create(assets.image`doorup`, SpriteKind.door4)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(7, 2))
    mySprite3 = sprites.create(assets.image`door`, SpriteKind.villagedoor)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 17))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(9, 0))
    sprites.destroyAllSpritesOfKind(SpriteKind.teleport)
    mapv += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level75`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.dungenenemy01)
    statusbar9 = statusbars.create(20, 4, StatusBarKind.doungenEhp01)
    statusbar9.max = 33
    statusbar9.attachToSprite(mySprite4)
    pause(1000)
    mySprite4.follow(mySprite, 86)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 15), randint(0, 10)))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(6, 9), sprites.dungeon.greenSwitchUp)
        tiles.setTileAt(tiles.getTileLocation(6, 0), sprites.dungeon.doorOpenSouth)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 32))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, randint(0, 15)))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(31, 2), sprites.builtin.forestTiles10)
        pause(2000)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(29, 11))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 15), randint(0, 10)))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += claw_extenders + randint(-2, -4)
    }
})
let statusbar9: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let mySprite10: Sprite = null
let seal_Hole = 0
let statusbar3: StatusBarSprite = null
let statusbar4: StatusBarSprite = null
let statusbar6: StatusBarSprite = null
let statusbar10: StatusBarSprite = null
let statusbar5: StatusBarSprite = null
let mySprite8: Sprite = null
let mySprite5: Sprite = null
let statusbar7: StatusBarSprite = null
let mySprite11: Sprite = null
let mySprite3: Sprite = null
let mySprite6: Sprite = null
let mySprite9: Sprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let statusbar11: StatusBarSprite = null
let mySprite2: Sprite = null
let statusbar8: StatusBarSprite = null
let mySprite12: Sprite = null
let mapv = 0
let claw_extenders = 0
let statusbar: StatusBarSprite = null
let mainhealth: StatusBarSprite = null
let mySprite: Sprite = null
let enemy_drops = 0
tiles.setCurrentTilemap(tilemap`home`)
mySprite = sprites.create(assets.image`cat`, SpriteKind.Player)
mainhealth = statusbars.create(45, 3, StatusBarKind.Health)
mainhealth.attachToSprite(mySprite)
mainhealth.setLabel("HP")
scene.cameraFollowSprite(mySprite)
info.setLife(1)
controller.moveSprite(mySprite)
statusbar = statusbars.create(28, 3, StatusBarKind.gold)
statusbar.value = 1
statusbar.setLabel("gold")
statusbar.attachToSprite(mySprite, 6, 2)
statusbar.setColor(5, 2)
tiles.placeOnRandomTile(mySprite, assets.tile`log`)
claw_extenders = 0
statusbar.max = 334
mapv = 0
