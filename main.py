@namespace
class SpriteKind:
    door = SpriteKind.create()
    door1 = SpriteKind.create()
    enemylvl2 = SpriteKind.create()
    downdoor0 = SpriteKind.create()
    boss_stage_1 = SpriteKind.create()
    person = SpriteKind.create()
    range2 = SpriteKind.create()
    enemylvl4 = SpriteKind.create()
    enemysightrange = SpriteKind.create()
    door2 = SpriteKind.create()
    enemynormal = SpriteKind.create()
    door3 = SpriteKind.create()
    bossstage2 = SpriteKind.create()
    teleportdoor00 = SpriteKind.create()
    knight = SpriteKind.create()
    camrea_anamamtion = SpriteKind.create()
    house = SpriteKind.create()
    door4 = SpriteKind.create()
    Charlie = SpriteKind.create()
    basicenenemy = SpriteKind.create()
    teleport = SpriteKind.create()
    dungenenemy01 = SpriteKind.create()
    gladiater = SpriteKind.create()
    riker = SpriteKind.create()
    villagedoor = SpriteKind.create()
    knights_door = SpriteKind.create()
    teleportdoor01 = SpriteKind.create()
    Eli = SpriteKind.create()
    rikerbossfight = SpriteKind.create()
    explosoin = SpriteKind.create()
@namespace
class StatusBarKind:
    enemyhealth1 = StatusBarKind.create()
    bosshealth = StatusBarKind.create()
    enemyhealth3 = StatusBarKind.create()
    gold = StatusBarKind.create()
    Enemyhealth0 = StatusBarKind.create()
    bosshealth2 = StatusBarKind.create()
    basicenenemyhealth1 = StatusBarKind.create()
    doungenEhp01 = StatusBarKind.create()
    gladiaterhp00 = StatusBarKind.create()
    rikerhp = StatusBarKind.create()

def on_overlap_tile(sprite, location):
    if controller.A.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(37, 9),
            sprites.dungeon.green_switch_up)
        tiles.set_wall_at(tiles.get_tile_location(50, 16), False)
        tiles.set_tile_at(tiles.get_tile_location(50, 16),
            assets.tile("""
                myTile2
            """))
        music.play(music.melody_playable(music.power_up),
            music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    pause(200)
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.enemylvl4, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    sprites.destroy(mySprite12)
    statusbar8.value += -6
sprites.on_overlap(SpriteKind.explosoin,
    SpriteKind.basicenenemy,
    on_on_overlap2)

def on_on_overlap3(sprite4, otherSprite3):
    if controller.A.is_pressed():
        game.show_long_text("I love kitties.", DialogLayout.BOTTOM)
        sprites.destroy(mySprite2)
        statusbar.value += -10
        tiles.set_current_tilemap(tilemap("""
            teleporter map
        """))
        tiles.place_on_tile(mySprite,
            tiles.get_tile_location(randint(0, 16), randint(0, 16)))
sprites.on_overlap(SpriteKind.player, SpriteKind.Charlie, on_on_overlap3)

def on_overlap_tile2(sprite5, location2):
    tiles.set_current_tilemap(tilemap("""
        level63
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(15, 1))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile38
    """),
    on_overlap_tile2)

def on_on_overlap4(sprite6, otherSprite4):
    sprites.destroy(mySprite12, effects.rings, 500)
    statusbar11.value += randint(-10, -99)
sprites.on_overlap(SpriteKind.rikerbossfight,
    SpriteKind.explosoin,
    on_on_overlap4)

def on_on_overlap5(sprite7, otherSprite5):
    mySprite4.follow(mySprite, 36)
    sprites.destroy(mySprite7, effects.disintegrate, 500)
sprites.on_overlap(SpriteKind.player,
    SpriteKind.enemysightrange,
    on_on_overlap5)

def on_overlap_tile3(sprite8, location3):
    global mySprite9, mySprite2, mySprite6, mySprite3
    tiles.set_current_tilemap(tilemap("""
        knights camp
    """))
    mySprite9 = sprites.create(img("""
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
        """),
        SpriteKind.house)
    mySprite2 = sprites.create(assets.image("""
        doorup
    """), SpriteKind.door4)
    mySprite6 = sprites.create(assets.image("""
        knight
    """), SpriteKind.knight)
    mySprite3 = sprites.create(assets.image("""
        door
    """), SpriteKind.villagedoor)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 17))
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(7, 2))
    tiles.place_on_tile(mySprite9, tiles.get_tile_location(15, 5))
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(10, 0))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(29, 0))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_open_south,
    on_overlap_tile3)

def on_overlap_tile4(sprite9, location4):
    if controller.A.is_pressed():
        game.show_long_text("The sign says: blacksmith's shop.", DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        blacksmiths sign
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite10, location5):
    if controller.A.is_pressed():
        if mainhealth.value < 100:
            if statusbar.value >= 4:
                game.show_long_text("let's see...", DialogLayout.BOTTOM)
                game.show_long_text("how much do you want healed?", DialogLayout.BOTTOM)
                game.show_long_text(game.ask_for_number("", 2), DialogLayout.BOTTOM)
                game.show_long_text("", DialogLayout.BOTTOM)
                game.show_long_text("", DialogLayout.BOTTOM)
        else:
            game.show_long_text("you are at full health already", DialogLayout.BOTTOM)
            tiles.place_on_tile(mySprite, tiles.get_tile_location(43, 12))
    if controller.B.is_pressed():
        game.show_long_text("ow!", DialogLayout.BOTTOM)
        game.show_long_text("stop that!", DialogLayout.BOTTOM)
        mySprite.y += 10
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Food-steps
    """),
    on_overlap_tile5)

def on_on_zero(status):
    sprites.destroy(mySprite4, effects.spray, 500)
    statusbar.value += randint(2, 8)
    tiles.set_tile_at(tiles.get_tile_location(15, 7),
        assets.tile("""
            myTile43
        """))
    tiles.set_wall_at(tiles.get_tile_location(15, 7), False)
statusbars.on_zero(StatusBarKind.doungenEhp01, on_on_zero)

def on_on_zero2(status2):
    sprites.destroy(mySprite11)
    game.game_over(True)
statusbars.on_zero(StatusBarKind.rikerhp, on_on_zero2)

def on_b_pressed():
    mySprite.set_image(img("""
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
    """))
    pause(487)
    mySprite.set_image(assets.image("""
        cat
    """))
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile6(sprite11, location6):
    if controller.A.is_pressed():
        game.show_long_text("the sign says: buy food here!", DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        food sign
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite12, location7):
    global mySprite4, statusbar7
    game.splash("boss fight!", "with the snake king")
    tiles.place_on_tile(mySprite, tiles.get_tile_location(37, 9))
    mySprite4 = sprites.create(assets.image("""
        snake king
    """), SpriteKind.bossstage2)
    tiles.place_on_random_tile(mySprite4, assets.tile("""
        red flowers spawn
    """))
    statusbar7 = statusbars.create(20, 4, StatusBarKind.bosshealth2)
    statusbar7.value = 53
    statusbar7.attach_to_sprite(mySprite4)
    mySprite4.follow(mySprite)
    statusbar7.max = 53
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTeleportor2
    """),
    on_overlap_tile7)

def on_on_zero3(status3):
    global mySprite5, mySprite6
    sprites.destroy(mySprite4, effects.fire, 5000)
    pause(2000)
    game.splash("stage 1 complete. entering stage 2.", "entering level 4.")
    tiles.set_current_tilemap(tilemap("""
        level0
    """))
    mySprite.set_position(14, 13)
    mainhealth.value = 100
    mySprite5 = sprites.create(assets.image("""
        Villager
    """), SpriteKind.person)
    tiles.place_on_tile(mySprite5, tiles.get_tile_location(29, 33))
    mySprite6 = sprites.create(assets.image("""
        range
    """), SpriteKind.range2)
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(29, 33))
    mySprite6.change_scale(4, ScaleAnchor.MIDDLE)
    statusbar.value += randint(2, 9)
    info.change_life_by(1)
statusbars.on_zero(StatusBarKind.bosshealth, on_on_zero3)

def on_on_zero4(status4):
    global mySprite2
    sprites.destroy(mySprite4)
    tiles.set_current_tilemap(tilemap("""
        level81
    """))
    mySprite2 = sprites.create(assets.image("""
        doorup
    """), SpriteKind.teleport)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 0))
statusbars.on_zero(StatusBarKind.gladiaterhp00, on_on_zero4)

def on_on_zero5(status5):
    global mySprite8
    sprites.destroy(mySprite4)
    mySprite8 = sprites.create(assets.image("""
        door1
    """), SpriteKind.door3)
    statusbar.value += randint(3, 9)
    tiles.place_on_tile(mySprite8, tiles.get_tile_location(110, 41))
statusbars.on_zero(StatusBarKind.Enemyhealth0, on_on_zero5)

def on_on_overlap6(sprite13, otherSprite6):
    if controller.B.is_pressed():
        statusbar11.value += randint(-1, -6) + claw_extenders
        mainhealth.value += randint(0, 3)
sprites.on_overlap(SpriteKind.player, SpriteKind.rikerbossfight, on_on_overlap6)

def on_overlap_tile8(sprite14, location8):
    global mySprite4, statusbar8, mySprite3
    tiles.set_current_tilemap(tilemap("""
        level61
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(5, randint(8, 7)))
    mySprite4 = sprites.create(assets.image("""
        witch
    """), SpriteKind.basicenenemy)
    statusbar8 = statusbars.create(20, 4, StatusBarKind.basicenenemyhealth1)
    statusbar8.value = 41
    statusbar8.max = 42
    statusbar8.attach_to_sprite(mySprite4)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(18, 5))
    mySprite4.follow(mySprite, 49)
    mySprite3 = sprites.create(assets.image("""
        door1
    """), SpriteKind.teleport)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(31, 5))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile34
    """),
    on_overlap_tile8)

def on_on_overlap7(sprite15, otherSprite7):
    if controller.B.is_pressed():
        statusbar5.value += randint(-2, -4)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemylvl4, on_on_overlap7)

def on_overlap_tile9(sprite16, location9):
    global mySprite4, statusbar10
    tiles.set_current_tilemap(tilemap("""
        level79
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 2))
    mySprite4 = sprites.create(assets.image("""
        gladeater
    """), SpriteKind.gladiater)
    statusbar10 = statusbars.create(20, 4, StatusBarKind.gladiaterhp00)
    statusbar10.value = 40
    statusbar10.attach_to_sprite(mySprite4)
    mySprite4.follow(mySprite, 79)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(18, 18))
    statusbar10.max = 40
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile24
    """),
    on_overlap_tile9)

def on_overlap_tile10(sprite17, location10):
    global mySprite2
    tiles.set_current_tilemap(tilemap("""
        bush_maze
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
    mySprite2 = sprites.create(assets.image("""
        door1
    """), SpriteKind.teleport)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(18, 16))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile32
    """),
    on_overlap_tile10)

def on_overlap_tile11(sprite18, location11):
    if controller.A.is_pressed():
        tiles.set_wall_at(tiles.get_tile_location(13, 14), False)
        tiles.set_tile_at(tiles.get_tile_location(1, 31),
            sprites.dungeon.green_switch_up)
        tiles.set_tile_at(tiles.get_tile_location(13, 14),
            sprites.dungeon.stair_ladder)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile13
    """),
    on_overlap_tile11)

def on_on_overlap8(sprite19, otherSprite8):
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar6.value += -5
sprites.on_overlap(SpriteKind.explosoin, SpriteKind.enemynormal, on_on_overlap8)

def on_on_overlap9(sprite20, otherSprite9):
    pause(randint(111, 333))
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.gladiater, SpriteKind.player, on_on_overlap9)

def on_on_overlap10(sprite21, otherSprite10):
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar5.value += -5
sprites.on_overlap(SpriteKind.explosoin, SpriteKind.enemylvl4, on_on_overlap10)

def on_overlap_tile12(sprite22, location12):
    if controller.A.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(7, 15),
            assets.tile("""
                myTile53
            """))
        tiles.set_tile_at(tiles.get_tile_location(4, 15),
            assets.tile("""
                myTile54
            """))
        tiles.set_wall_at(tiles.get_tile_location(4, 15), False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile46
    """),
    on_overlap_tile12)

def on_overlap_tile13(sprite23, location13):
    if controller.A.is_pressed():
        game.show_long_text("you want gold?", DialogLayout.BOTTOM)
        game.show_long_text("What do you have to offer?", DialogLayout.BOTTOM)
        game.show_long_text("For all that I could give you... let me see...",
            DialogLayout.BOTTOM)
        game.show_long_text("twenty eight gold", DialogLayout.BOTTOM)
        game.show_long_text("Here you go!", DialogLayout.BOTTOM)
        tiles.set_tile_at(tiles.get_tile_location(15, 29),
            assets.tile("""
                steps
            """))
        tiles.set_tile_at(tiles.get_tile_location(16, 29),
            assets.tile("""
                steps
            """))
        tiles.set_tile_at(tiles.get_tile_location(17, 29),
            assets.tile("""
                steps
            """))
        tiles.set_tile_at(tiles.get_tile_location(18, 29),
            assets.tile("""
                steps
            """))
        statusbar.attach_to_sprite(mySprite)
        statusbar.value += randint(21, 46)
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Gold-sellers steps
    """),
    on_overlap_tile13)

def on_overlap_tile14(sprite24, location14):
    tiles.set_current_tilemap(tilemap("""
        level42
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile14)

def on_overlap_tile15(sprite25, location15):
    global mySprite4, statusbar4
    game.show_long_text("get ready for a boss fight", DialogLayout.FULL)
    mySprite4 = sprites.create(assets.image("""
        monster3
    """), SpriteKind.boss_stage_1)
    tiles.place_on_random_tile(mySprite4, sprites.swamp.swamp_tile13)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.bosshealth)
    statusbar4.value = 22
    statusbar4.attach_to_sprite(mySprite4)
    pause(2000)
    mySprite4.follow(mySprite, 89)
    statusbar4.max = 22
    tiles.place_on_random_tile(mySprite, sprites.swamp.swamp_tile16)
scene.on_overlap_tile(SpriteKind.player,
    sprites.swamp.swamp_tile3,
    on_overlap_tile15)

def on_on_overlap11(sprite26, otherSprite11):
    pause(213)
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.enemynormal, SpriteKind.player, on_on_overlap11)

def on_on_overlap12(sprite27, otherSprite12):
    global mySprite2, mySprite3, mySprite6, mySprite9
    sprites.destroy_all_sprites_of_kind(SpriteKind.knights_door)
    tiles.set_current_tilemap(tilemap("""
        knights camp
    """))
    mySprite2 = sprites.create(assets.image("""
        doorup
    """), SpriteKind.door4)
    mySprite3 = sprites.create(assets.image("""
        door
    """), SpriteKind.villagedoor)
    mySprite6 = sprites.create(assets.image("""
        knight
    """), SpriteKind.knight)
    mySprite9 = sprites.create(img("""
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
        """),
        SpriteKind.house)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(9, 2))
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 17))
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(9, 0))
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(7, 2))
    tiles.place_on_tile(mySprite9, tiles.get_tile_location(15, 5))
sprites.on_overlap(SpriteKind.player, SpriteKind.knights_door, on_on_overlap12)

def on_overlap_tile16(sprite28, location16):
    if controller.A.is_pressed():
        game.show_long_text("The sign says: gold seller's shop.", DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        gold sellers sign
    """),
    on_overlap_tile16)

def on_on_zero6(status6):
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemylvl2, effects.spray, 5000)
    pause(5000)
    tiles.set_current_tilemap(tilemap("""
        level2-3
    """))
    mySprite.set_position(43, 3)
    mainhealth.value += 20
    statusbar.value += randint(1, 2)
statusbars.on_zero(StatusBarKind.enemyhealth1, on_on_zero6)

def on_overlap_tile17(sprite29, location17):
    tiles.set_current_tilemap(tilemap("""
        level-2 forest abyss
    """))
    mySprite.set_position(7, 3)
scene.on_overlap_tile(SpriteKind.player,
    sprites.castle.sapling_pine,
    on_overlap_tile17)

def on_on_zero7(status7):
    global mySprite6
    sprites.destroy(mySprite4, effects.fountain, 1000)
    statusbar.value += randint(0, 1)
    pause(3000)
    game.show_long_text("thank you I will bring you to my village and get you healed!",
        DialogLayout.FULL)
    tiles.set_current_tilemap(tilemap("""
        village1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 20))
    tiles.place_on_tile(mySprite5, tiles.get_tile_location(66, 19))
    mainhealth.value = 100
    statusbar.value += randint(2, 9)
    mySprite5.set_image(assets.image("""
        person
    """))
    mySprite6 = sprites.create(assets.image("""
        door1
    """), SpriteKind.door2)
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(99, 20))
statusbars.on_zero(StatusBarKind.enemyhealth3, on_on_zero7)

def on_overlap_tile18(sprite30, location18):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, randint(0, 15)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile33
    """),
    on_overlap_tile18)

def on_overlap_tile19(sprite31, location19):
    global mySprite4, statusbar8
    tiles.set_current_tilemap(tilemap("""
        level91
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
    for index in range(2):
        mySprite4 = sprites.create(img("""
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
            """),
            SpriteKind.basicenenemy)
        tiles.place_on_tile(mySprite4, tiles.get_tile_location(10, 3))
        statusbar8 = statusbars.create(10, 3, StatusBarKind.basicenenemyhealth1)
        statusbar8.attach_to_sprite(mySprite4)
        statusbar8.value = 33
        statusbar8.max = 33
        mySprite4.follow(mySprite, randint(25, 100))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile25
    """),
    on_overlap_tile19)

def on_on_overlap13(sprite32, otherSprite13):
    if controller.B.is_pressed():
        statusbar6.value += claw_extenders + randint(-3, -5)
        mySprite4.follow(mySprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemynormal, on_on_overlap13)

def on_overlap_tile20(sprite33, location20):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(30, 1))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_west,
    on_overlap_tile20)

def on_overlap_tile21(sprite34, location21):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 27))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_closed_north,
    on_overlap_tile21)

def on_on_overlap14(sprite35, otherSprite14):
    sprites.destroy(mySprite12, effects.rings, 500)
    statusbar7.value += -7
sprites.on_overlap(SpriteKind.explosoin, SpriteKind.bossstage2, on_on_overlap14)

def on_overlap_tile22(sprite36, location22):
    global claw_extenders
    if controller.A.is_pressed():
        music.play(music.melody_playable(music.knock),
            music.PlaybackMode.UNTIL_DONE)
        game.show_long_text("Got gold?", DialogLayout.BOTTOM)
        if statusbar.value >= 20:
            game.show_long_text("let's see for that I could give you...",
                DialogLayout.BOTTOM)
            game.show_long_text("a claw extender.", DialogLayout.BOTTOM)
            game.show_long_text("Which gives +1 damage.", DialogLayout.BOTTOM)
            if controller.B.is_pressed():
                game.show_long_text("No? ok.", DialogLayout.BOTTOM)
                tiles.place_on_tile(mySprite, tiles.get_tile_location(10, 12))
            pause(1000)
            game.show_long_text("all yours.", DialogLayout.BOTTOM)
            statusbar.value += -20
            claw_extenders += -1
            music.play(music.melody_playable(music.power_up),
                music.PlaybackMode.UNTIL_DONE)
            game.show_long_text("you got the claw extender!", DialogLayout.BOTTOM)
            game.show_long_text("The claw extender increases the amount of damage you deal per attack by one. Despite its name it does not increase attack range.",
                DialogLayout.FULL)
            pause(500)
            game.show_long_text("bye!", DialogLayout.BOTTOM)
            tiles.place_on_tile(mySprite, tiles.get_tile_location(10, 12))
        else:
            game.show_long_text("then leave!!", DialogLayout.BOTTOM)
            tiles.place_on_tile(mySprite, tiles.get_tile_location(10, 19))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        blacksmiths shop
    """),
    on_overlap_tile22)

def on_overlap_tile23(sprite37, location23):
    if controller.A.is_pressed():
        tiles.place_on_random_tile(mySprite, sprites.castle.shrub)
scene.on_overlap_tile(SpriteKind.player, sprites.castle.shrub, on_overlap_tile23)

def on_on_overlap15(sprite38, otherSprite15):
    global mySprite2
    tiles.set_current_tilemap(tilemap("""
        level38
    """))
    sprites.destroy_all_sprites_of_kind(SpriteKind.teleportdoor00)
    tiles.place_on_random_tile(mySprite, sprites.dungeon.floor_light5)
    mySprite2 = sprites.create(assets.image("""
        door1
    """), SpriteKind.door3)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(8, 5))
sprites.on_overlap(SpriteKind.player,
    SpriteKind.teleportdoor00,
    on_on_overlap15)

def on_on_overlap16(sprite39, otherSprite16):
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar3.value += -6
sprites.on_overlap(SpriteKind.explosoin, SpriteKind.enemylvl2, on_on_overlap16)

def on_overlap_tile24(sprite40, location24):
    if controller.A.is_pressed():
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 8))
        tiles.set_current_tilemap(tilemap("""
            level45
        """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_switch_down,
    on_overlap_tile24)

def on_on_overlap17(sprite41, otherSprite17):
    if seal_Hole == 1:
        if controller.A.is_pressed():
            game.show_long_text("we have sealed the hole", DialogLayout.BOTTOM)
sprites.on_overlap(SpriteKind.player, SpriteKind.knight, on_on_overlap17)

def on_overlap_tile25(sprite42, location25):
    tiles.set_current_tilemap(tilemap("""
        level65
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile29
    """),
    on_overlap_tile25)

def on_on_overlap18(sprite43, otherSprite18):
    global mySprite10, mySprite2
    if controller.A.is_pressed():
        sprites.destroy(mySprite2)
        sprites.destroy(mySprite9)
        sprites.destroy(mySprite3)
        sprites.destroy(mySprite6)
        if mapv >= 20:
            game.splash("program error: stack overflow")
            tiles.set_current_tilemap(tilemap("""
                level85
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
            mySprite10 = sprites.create(assets.image("""
                riker
            """), SpriteKind.riker)
        else:
            tiles.set_current_tilemap(tilemap("""
                Charlies_shop
            """))
            mySprite2 = sprites.create(assets.image("""
                charlie
            """), SpriteKind.Charlie)
            tiles.place_on_tile(mySprite2, tiles.get_tile_location(4, 1))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(4, 7))
sprites.on_overlap(SpriteKind.player, SpriteKind.house, on_on_overlap18)

def on_on_zero8(status8):
    sprites.destroy(mySprite4)
    game.splash("next level?")
    tiles.place_on_random_tile(mySprite, sprites.castle.rock0)
    statusbar.value += 1
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero8)

def on_on_overlap19(sprite44, otherSprite19):
    if controller.A.is_pressed():
        game.show_long_text("naw bro thats wild how many people have you killed",
            DialogLayout.BOTTOM)
        game.show_long_text("here you'll need this.", DialogLayout.BOTTOM)
        info.set_life(9)
        game.show_long_text("bye!", DialogLayout.BOTTOM)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Eli)
        tiles.set_current_tilemap(tilemap("""
            the prison
        """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(4, 8))
        mainhealth.value = 99
sprites.on_overlap(SpriteKind.player, SpriteKind.Eli, on_on_overlap19)

def on_on_overlap20(sprite45, otherSprite20):
    pause(200)
    mainhealth.value += -3
    pause(50)
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.bossstage2, SpriteKind.player, on_on_overlap20)

def on_overlap_tile26(sprite46, location26):
    if controller.A.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(2, 0),
            sprites.dungeon.green_switch_up)
        tiles.set_wall_at(tiles.get_tile_location(8, 6), False)
        tiles.set_wall_at(tiles.get_tile_location(9, 6), False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_switch_down,
    on_overlap_tile26)

def on_overlap_tile27(sprite47, location27):
    global mySprite3
    tiles.set_current_tilemap(tilemap("""
        forest maze
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
    mySprite3 = sprites.create(assets.image("""
        door1
    """), SpriteKind.teleport)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(19, 19))
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_sand9,
    on_overlap_tile27)

def on_on_zero9(status9):
    info.change_life_by(-1)
    mainhealth.value = 99
statusbars.on_zero(StatusBarKind.health, on_on_zero9)

def on_overlap_tile28(sprite48, location28):
    tiles.place_on_tile(mySprite,
        tiles.get_tile_location(randint(0, 15), randint(0, 10)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile37
    """),
    on_overlap_tile28)

def on_overlap_tile29(sprite49, location29):
    global seal_Hole
    mainhealth.value += -1
    tiles.set_wall_at(tiles.get_tile_location(28, 10), True)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(27, 10))
    game.show_long_text("So you came from a dungeon? once the other knights get back we will seal it up.",
        DialogLayout.BOTTOM)
    seal_Hole = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile29)

def on_overlap_tile30(sprite50, location30):
    global mySprite3
    sprites.destroy_all_sprites_of_kind(SpriteKind.basicenenemy)
    tiles.set_current_tilemap(tilemap("""
        Elisdungen
    """))
    mySprite3 = sprites.create(img("""
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
        """),
        SpriteKind.Eli)
    scene.camera_shake(4, 500)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(14, 6))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile54
    """),
    on_overlap_tile30)

def on_overlap_tile31(sprite51, location31):
    global mySprite2
    game.splash("have fun out there")
    tiles.set_current_tilemap(tilemap("""
        forest-1
    """))
    mySprite.set_position(106, 3)
    mySprite2 = sprites.create(assets.image("""
        door1
    """), SpriteKind.door)
    mySprite2.set_position(251, 232)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        small grass
    """),
    on_overlap_tile31)

def on_on_overlap21(sprite52, otherSprite21):
    if controller.B.is_pressed():
        statusbar3.value += -3
sprites.on_overlap(SpriteKind.player, SpriteKind.enemylvl2, on_on_overlap21)

def on_on_overlap22(sprite53, otherSprite22):
    if controller.B.is_pressed():
        statusbar7.value += randint(-2, -5) + claw_extenders
sprites.on_overlap(SpriteKind.player, SpriteKind.bossstage2, on_on_overlap22)

def on_overlap_tile32(sprite54, location32):
    global mySprite3
    tiles.set_current_tilemap(tilemap("""
        level67
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
    mySprite3 = sprites.create(assets.image("""
        door1
    """), SpriteKind.teleport)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(17, 17))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile40
    """),
    on_overlap_tile32)

def on_overlap_tile33(sprite55, location33):
    tiles.place_on_tile(mySprite,
        tiles.get_tile_location(randint(0, 15), randint(0, 10)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile36
    """),
    on_overlap_tile33)

def on_on_overlap23(sprite56, otherSprite23):
    if controller.B.is_pressed():
        statusbar4.value += -3
        mainhealth.value += 1
sprites.on_overlap(SpriteKind.player, SpriteKind.boss_stage_1, on_on_overlap23)

def on_overlap_tile34(sprite57, location34):
    global mySprite4, statusbar3
    mySprite4 = sprites.create(assets.image("""
        monster3
    """), SpriteKind.enemylvl2)
    statusbar3 = statusbars.create(15, 3, StatusBarKind.enemyhealth1)
    statusbar3.attach_to_sprite(mySprite4)
    statusbar3.value = 16
    game.splash("get ready to battle!")
    tiles.place_on_random_tile(mySprite4, sprites.swamp.swamp_tile1)
    pause(500)
    mySprite4.follow(mySprite, 74)
    statusbar3.max = 16
    tiles.place_on_random_tile(mySprite, sprites.skillmap.island_tile7)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        teleporter1
    """),
    on_overlap_tile34)

def on_overlap_tile35(sprite58, location35):
    global mySprite11, statusbar11
    if controller.A.is_pressed():
        tiles.set_wall_at(tiles.get_tile_location(2, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(6, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(10, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(14, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(18, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(22, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(26, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(30, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(34, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(38, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(42, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(46, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(49, 4), False)
        tiles.set_wall_at(tiles.get_tile_location(2, 11), False)
        tiles.set_wall_at(tiles.get_tile_location(8, 11), False)
        tiles.set_wall_at(tiles.get_tile_location(16, 11), False)
        tiles.set_wall_at(tiles.get_tile_location(24, 11), False)
        tiles.set_wall_at(tiles.get_tile_location(31, 11), False)
        tiles.set_wall_at(tiles.get_tile_location(40, 11), False)
        tiles.set_wall_at(tiles.get_tile_location(47, 11), False)
        tiles.set_tile_at(tiles.get_tile_location(47, 11),
            assets.tile("""
                myTile61
            """))
        tiles.set_tile_at(tiles.get_tile_location(24, 11),
            assets.tile("""
                myTile61
            """))
        tiles.set_tile_at(tiles.get_tile_location(40, 11),
            assets.tile("""
                myTile61
            """))
        tiles.set_tile_at(tiles.get_tile_location(47, 12),
            assets.tile("""
                myTile60
            """))
        tiles.set_tile_at(tiles.get_tile_location(24, 12),
            assets.tile("""
                myTile60
            """))
        tiles.set_tile_at(tiles.get_tile_location(40, 12),
            assets.tile("""
                myTile60
            """))
        mySprite11 = sprites.create(assets.image("""
            riker
        """), SpriteKind.rikerbossfight)
        tiles.set_tile_at(tiles.get_tile_location(0, 7),
            assets.tile("""
                myTile58
            """))
        tiles.set_tile_at(tiles.get_tile_location(0, 8),
            assets.tile("""
                myTile58
            """))
        tiles.place_on_random_tile(mySprite11, sprites.dungeon.floor_mixed)
        statusbar11 = statusbars.create(20, 4, StatusBarKind.rikerhp)
        statusbar11.attach_to_sprite(mySprite11)
        statusbar11.max = 4096
        statusbar11.value = 4096
        mySprite11.follow(mySprite, randint(1, 100))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile59
    """),
    on_overlap_tile35)

def on_on_overlap24(sprite59, otherSprite24):
    global mySprite2
    sprites.destroy_all_sprites_of_kind(SpriteKind.villagedoor)
    tiles.set_current_tilemap(tilemap("""
        village1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(61, 36))
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.knights_door)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(61, 39))
sprites.on_overlap(SpriteKind.player, SpriteKind.villagedoor, on_on_overlap24)

def on_on_zero10(status10):
    sprites.destroy(mySprite4)
    statusbar.value += randint(3, 9)
    mainhealth.value += randint(0, 1)
statusbars.on_zero(StatusBarKind.basicenenemyhealth1, on_on_zero10)

def on_on_overlap25(sprite60, otherSprite25):
    pause(randint(112, 374))
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap25)

def on_overlap_tile36(sprite61, location36):
    tiles.set_current_tilemap(tilemap("""
        house
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(13, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        door bottom
    """),
    on_overlap_tile36)

def on_overlap_tile37(sprite62, location37):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 1))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        door
    """),
    on_overlap_tile37)

def on_on_overlap26(sprite63, otherSprite26):
    global mySprite4, statusbar2
    game.show_long_text("If stuck on one tile island press A", DialogLayout.BOTTOM)
    game.show_long_text("To attack press B", DialogLayout.BOTTOM)
    sprites.destroy_all_sprites_of_kind(SpriteKind.door1)
    tiles.set_current_tilemap(tilemap("""
        battle-1
    """))
    game.splash("battle!!!", "get ready. then press A to begin.")
    tiles.place_on_random_tile(mySprite, sprites.castle.shrub)
    mySprite4 = sprites.create(assets.image("""
        monster
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(mySprite4, sprites.swamp.swamp_tile13)
    statusbar2 = statusbars.create(15, 3, StatusBarKind.enemy_health)
    statusbar2.attach_to_sprite(mySprite4)
    mainhealth.value = 100
    statusbar2.value = 15
    mySprite4.follow(mySprite, 58)
    statusbar2.max = 15
sprites.on_overlap(SpriteKind.player, SpriteKind.door1, on_on_overlap26)

def on_overlap_tile38(sprite64, location38):
    global mySprite3
    tiles.set_current_tilemap(tilemap("""
        level77
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
    mySprite3 = sprites.create(assets.image("""
        doorup
    """), SpriteKind.teleport)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(1, 19))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile43
    """),
    on_overlap_tile38)

def on_on_overlap27(sprite65, otherSprite27):
    pause(randint(100, 398))
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.dungenenemy01, SpriteKind.player, on_on_overlap27)

def on_on_overlap28(sprite66, otherSprite28):
    if controller.B.is_pressed():
        statusbar8.value += claw_extenders + randint(-1, -5)
sprites.on_overlap(SpriteKind.player, SpriteKind.basicenenemy, on_on_overlap28)

def on_combos_attach_combo():
    global mySprite12
    mySprite12 = sprites.create(assets.image("""
        boom
    """), SpriteKind.explosoin)
    tiles.place_on_tile(mySprite12, mySprite.tilemap_location())
    mySprite12.follow(mySprite)
controller.combos.attach_combo("BB+A", on_combos_attach_combo)

def on_on_overlap29(sprite67, otherSprite29):
    global mySprite3
    tiles.set_current_tilemap(tilemap("""
        forest level-1 stage-2
    """))
    mySprite.set_position(0, 39)
    mySprite3 = sprites.create(assets.image("""
        door1
    """), SpriteKind.door1)
    mySprite3.set_position(251, 25)
    sprites.destroy_all_sprites_of_kind(SpriteKind.door)
sprites.on_overlap(SpriteKind.player, SpriteKind.door, on_on_overlap29)

def on_on_overlap30(sprite68, otherSprite30):
    global mySprite4, mySprite7, statusbar5
    sprites.destroy_all_sprites_of_kind(SpriteKind.range2)
    game.show_long_text("please help me!", DialogLayout.BOTTOM)
    game.show_long_text("The monsters are blocking the way home!",
        DialogLayout.BOTTOM)
    game.show_long_text("please get rid of them!", DialogLayout.BOTTOM)
    game.show_long_text("I'll show you where they are.", DialogLayout.BOTTOM)
    tiles.set_current_tilemap(tilemap("""
        path to village stage1 level4
    """))
    game.show_long_text("they are this way. PLEASE defeat them. PLEASE! this is how I got stuck: I was just on a hunting trip and when I came back they were blocking the way!",
        DialogLayout.FULL)
    mySprite4 = sprites.create(assets.image("""
            monster snake lvl 4
        """),
        SpriteKind.enemylvl4)
    mySprite7 = sprites.create(assets.image("""
            snake sight range
        """),
        SpriteKind.enemysightrange)
    statusbar5 = statusbars.create(14, 4, StatusBarKind.enemyhealth3)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(35, 7))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(4, 7))
    tiles.place_on_tile(mySprite5, tiles.get_tile_location(0, 7))
    statusbar5.attach_to_sprite(mySprite4)
    statusbar5.value = 19
    mySprite5.say_text("this is as far as I am going.", 5000, False)
    tiles.place_on_tile(mySprite7, tiles.get_tile_location(35, 7))
    mySprite7.set_scale(6, ScaleAnchor.MIDDLE)
    statusbar5.max = 19
sprites.on_overlap(SpriteKind.player, SpriteKind.range2, on_on_overlap30)

def on_overlap_tile39(sprite69, location39):
    global mySprite5
    tiles.place_on_tile(mySprite, tiles.get_tile_location(42, 38))
    mySprite5 = sprites.create(img("""
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
        """),
        SpriteKind.teleportdoor00)
    tiles.place_on_tile(mySprite5, tiles.get_tile_location(48, 41))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile39)

def on_on_overlap31(sprite70, otherSprite31):
    if controller.B.is_pressed():
        statusbar9.value += claw_extenders + randint(-2, -4)
sprites.on_overlap(SpriteKind.player, SpriteKind.dungenenemy01, on_on_overlap31)

def on_overlap_tile40(sprite71, location40):
    mySprite.set_position(62, -3)
    tiles.set_current_tilemap(tilemap("""
        level-3
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.swamp.swamp_tile19,
    on_overlap_tile40)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_overlap_tile41(sprite72, location41):
    global claw_extenders
    if controller.A.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(3, 1),
            sprites.dungeon.dark_ground_center)
        claw_extenders += -3
        sprites.destroy(mySprite5)
        pause(1000)
        tiles.set_current_tilemap(tilemap("""
            level36
        """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest
    """),
    on_overlap_tile41)

def on_on_overlap32(sprite73, otherSprite32):
    pause(110)
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.enemylvl2, SpriteKind.player, on_on_overlap32)

def on_on_overlap33(sprite74, otherSprite33):
    if controller.B.is_pressed():
        statusbar10.value += randint(-2, -5) + claw_extenders
sprites.on_overlap(SpriteKind.player, SpriteKind.gladiater, on_on_overlap33)

def on_on_overlap34(sprite75, otherSprite34):
    pause(138)
    mainhealth.value += -2
sprites.on_overlap(SpriteKind.boss_stage_1, SpriteKind.player, on_on_overlap34)

def on_on_overlap35(sprite76, otherSprite35):
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar4.value += -5
sprites.on_overlap(SpriteKind.explosoin,
    SpriteKind.boss_stage_1,
    on_on_overlap35)

def on_on_overlap36(sprite77, otherSprite36):
    pause(randint(111, 333))
    mainhealth.value += randint(0, -4)
    statusbar.value += randint(0, randint(0, randint(0, randint(0, -3))))
sprites.on_overlap(SpriteKind.rikerbossfight,
    SpriteKind.player,
    on_on_overlap36)

def on_on_overlap37(sprite78, otherSprite37):
    tiles.set_current_tilemap(tilemap("""
        final boos stage 2
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 1))
    sprites.destroy_all_sprites_of_kind(SpriteKind.door3)
sprites.on_overlap(SpriteKind.player, SpriteKind.door3, on_on_overlap37)

def on_on_zero11(status11):
    sprites.destroy_all_sprites_of_kind(SpriteKind.bossstage2, effects.ashes, 2000)
    pause(3968)
    game.splash("stage 2 Boss defeted")
    tiles.set_current_tilemap(tilemap("""
        level40
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
    mainhealth.value = 100
    info.change_life_by(1)
statusbars.on_zero(StatusBarKind.bosshealth2, on_on_zero11)

def on_overlap_tile42(sprite79, location42):
    tiles.place_on_tile(mySprite,
        tiles.get_tile_location(randint(0, 15), randint(0, 10)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile27
    """),
    on_overlap_tile42)

def on_on_overlap38(sprite80, otherSprite38):
    sprites.destroy(mySprite12, effects.confetti, 500)
    statusbar2.value += -6
sprites.on_overlap(SpriteKind.explosoin, SpriteKind.enemy, on_on_overlap38)

def on_on_overlap39(sprite81, otherSprite39):
    global mySprite4, statusbar6
    sprites.destroy_all_sprites_of_kind(SpriteKind.door2)
    sprites.destroy_all_sprites_of_kind(SpriteKind.person, effects.smiles, 100)
    tiles.set_current_tilemap(tilemap("""
        lvl 4
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 6))
    mySprite4 = sprites.create(assets.image("""
            monster snake lvl 4
        """),
        SpriteKind.enemynormal)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(95, 41))
    statusbar6 = statusbars.create(12, 3, StatusBarKind.Enemyhealth0)
    statusbar6.attach_to_sprite(mySprite4)
    statusbar6.value = 24
sprites.on_overlap(SpriteKind.player, SpriteKind.door2, on_on_overlap39)

def on_on_overlap40(sprite82, otherSprite40):
    pause(randint(99, 123))
    mainhealth.value += -1
sprites.on_overlap(SpriteKind.basicenenemy, SpriteKind.player, on_on_overlap40)

def on_on_overlap41(sprite83, otherSprite41):
    global mySprite2
    tiles.set_current_tilemap(tilemap("""
        level40
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(5, 40))
    sprites.destroy(mySprite9)
    sprites.destroy_all_sprites_of_kind(SpriteKind.door4)
    sprites.destroy(mySprite3)
    if seal_Hole == 1:
        tiles.place_on_tile(mySprite6, tiles.get_tile_location(77, 9))
        tiles.set_tile_at(tiles.get_tile_location(75, 9), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(75, 8), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(75, 10), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(74, 9), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(76, 9), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(74, 8), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(76, 8), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(76, 10), sprites.castle.tile_grass1)
        tiles.set_tile_at(tiles.get_tile_location(74, 10), sprites.castle.tile_grass1)
        mySprite2 = sprites.create(assets.image("""
            doorup
        """), SpriteKind.knights_door)
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 40))
    else:
        sprites.destroy(mySprite6)
sprites.on_overlap(SpriteKind.player, SpriteKind.door4, on_on_overlap41)

def on_overlap_tile43(sprite84, location43):
    game.splash("you escaped the spirits lair", "and moved on to level 2")
    tiles.set_current_tilemap(tilemap("""
        level-2 sky forest
    """))
    mainhealth.value += 24
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_large,
    on_overlap_tile43)

def on_on_overlap42(sprite85, otherSprite42):
    global mySprite9, mySprite6, mySprite2, mySprite3, mapv
    tiles.set_current_tilemap(tilemap("""
        knights camp
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, randint(5, 6)))
    mySprite9 = sprites.create(img("""
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
        """),
        SpriteKind.house)
    mySprite6 = sprites.create(img("""
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
        """),
        SpriteKind.knight)
    tiles.place_on_tile(mySprite9, tiles.get_tile_location(15, 5))
    mySprite2 = sprites.create(assets.image("""
        doorup
    """), SpriteKind.door4)
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(7, 2))
    mySprite3 = sprites.create(assets.image("""
        door
    """), SpriteKind.villagedoor)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 17))
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(9, 0))
    sprites.destroy_all_sprites_of_kind(SpriteKind.teleport)
    mapv += 1
sprites.on_overlap(SpriteKind.player, SpriteKind.teleport, on_on_overlap42)

def on_overlap_tile44(sprite86, location44):
    global mySprite4, statusbar9
    tiles.set_current_tilemap(tilemap("""
        level75
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
    mySprite4 = sprites.create(assets.image("""
        monster3
    """), SpriteKind.dungenenemy01)
    statusbar9 = statusbars.create(20, 4, StatusBarKind.doungenEhp01)
    statusbar9.max = 33
    statusbar9.attach_to_sprite(mySprite4)
    pause(1000)
    mySprite4.follow(mySprite, 86)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile35
    """),
    on_overlap_tile44)

def on_overlap_tile45(sprite87, location45):
    tiles.place_on_tile(mySprite,
        tiles.get_tile_location(randint(0, 15), randint(0, 10)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile23
    """),
    on_overlap_tile45)

def on_overlap_tile46(sprite88, location46):
    if controller.A.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(6, 9),
            sprites.dungeon.green_switch_up)
        tiles.set_tile_at(tiles.get_tile_location(6, 0),
            sprites.dungeon.door_open_south)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile14
    """),
    on_overlap_tile46)

def on_overlap_tile47(sprite89, location47):
    if controller.A.is_pressed():
        tiles.place_on_tile(mySprite, tiles.get_tile_location(22, 32))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile47)

def on_overlap_tile48(sprite90, location48):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, randint(0, 15)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile30
    """),
    on_overlap_tile48)

def on_overlap_tile49(sprite91, location49):
    if controller.B.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(31, 2),
            sprites.builtin.forest_tiles10)
        pause(2000)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(29, 11))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_dark3,
    on_overlap_tile49)

def on_overlap_tile50(sprite92, location50):
    tiles.place_on_tile(mySprite,
        tiles.get_tile_location(randint(0, 15), randint(0, 10)))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile28
    """),
    on_overlap_tile50)

def on_on_overlap43(sprite93, otherSprite43):
    if controller.B.is_pressed():
        statusbar2.value += claw_extenders + randint(-2, -4)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap43)

statusbar9: StatusBarSprite = None
statusbar2: StatusBarSprite = None
mySprite10: Sprite = None
seal_Hole = 0
statusbar3: StatusBarSprite = None
statusbar4: StatusBarSprite = None
statusbar6: StatusBarSprite = None
statusbar10: StatusBarSprite = None
statusbar5: StatusBarSprite = None
mySprite8: Sprite = None
mySprite5: Sprite = None
statusbar7: StatusBarSprite = None
mySprite11: Sprite = None
mySprite3: Sprite = None
mySprite6: Sprite = None
mySprite9: Sprite = None
mySprite7: Sprite = None
mySprite4: Sprite = None
statusbar11: StatusBarSprite = None
mySprite2: Sprite = None
statusbar8: StatusBarSprite = None
mySprite12: Sprite = None
mapv = 0
claw_extenders = 0
statusbar: StatusBarSprite = None
mainhealth: StatusBarSprite = None
mySprite: Sprite = None
enemy_drops = 0
tiles.set_current_tilemap(tilemap("""
    home
"""))
mySprite = sprites.create(assets.image("""
    cat
"""), SpriteKind.player)
mainhealth = statusbars.create(45, 3, StatusBarKind.health)
mainhealth.attach_to_sprite(mySprite)
mainhealth.set_label("HP")
scene.camera_follow_sprite(mySprite)
info.set_life(1)
controller.move_sprite(mySprite)
statusbar = statusbars.create(28, 3, StatusBarKind.gold)
statusbar.value = 1
statusbar.set_label("gold")
statusbar.attach_to_sprite(mySprite, 6, 2)
statusbar.set_color(5, 2)
tiles.place_on_random_tile(mySprite, assets.tile("""
    log
"""))
claw_extenders = 0
statusbar.max = 339
mapv = 0

def on_on_update():
    characterAnimations.run_frames(mySprite,
        [img("""
                e e e . . . . e e e . . . . 
                        c d d c . . c d d c . . . . 
                        c b d d f f d d b c . . . . 
                        c 3 b d d b d b 3 c . . . . 
                        f b 3 d d d d 3 b f . . . . 
                        e d d d d d d d d e . . . . 
                        e d f d d d d f d e . b f b 
                        f d d f d d f d d f . f d f 
                        f b d d b b d d 2 f . f d f 
                        . f 2 2 2 2 2 2 b b f f d f 
                        . f b d d d d d d b b d b f 
                        . f d d d d d b d d f f f . 
                        . f d f f f d f f d f . . . 
                        . f f . . f f . . f f . . .
            """),
            img("""
                . . . . . . . . . . . . . . 
                        e e e . . . . e e e . . . . 
                        c d d c . . c d d c . . . . 
                        c b d d f f d d b c . . . . 
                        c 3 b d d b d b 3 c . . . . 
                        f b 3 d d d d 3 b f . . . . 
                        e d d d d d d d d e . . . . 
                        e d f d d d d f d e b f b . 
                        f d d f d d f d d f f d f . 
                        f b d d b b d d 2 b f d f . 
                        . f 2 2 2 2 2 2 d b d b f . 
                        . f d d d d d d d f f f . . 
                        . f d b d f f f d f . . . . 
                        . . f f f f . . f f . . . .
            """),
            img("""
                . . . . . . . . . . . . . . 
                        e e e . . . . e e e . . . . 
                        c d d c . . c d d c . . . . 
                        c b d d f f d d b c . . . . 
                        c 3 b d d b d b 3 c . . . . 
                        f b 3 d d d d 3 b f . . . . 
                        e d d d d d d d d e . . . . 
                        e d f d d d d f d e . b f b 
                        f d d f d d f d d f . f d f 
                        f b d d b b d d 2 b f f d f 
                        . f 2 2 2 2 2 2 d b b d b f 
                        . f d d d d d d d f f f f . 
                        . . f d b d f d f . . . . . 
                        . . . f f f f f f . . . . .
            """)],
        500,
        characterAnimations.rule(controller.dx()))
game.on_update(on_on_update)

def on_on_update2():
    characterAnimations.run_frames(mySprite,
        [img("""
                . . . . e e e . . . . e e e 
                        . . . . c d d c . . c d d c 
                        . . . . c b d d f f d d b c 
                        . . . . c 3 b d b d d b 3 c 
                        . . . . f b 3 d d d d 3 b f 
                        . . . . e d d d d d d d d e 
                        b f b . e d f d d d d f d e 
                        f d f . f d d f d d f d d f 
                        f d f . f 2 d d b b d d b f 
                        f d f f b b 2 2 2 2 2 2 f . 
                        f b d b b d d d d d d b f . 
                        . f f f d d b d d d d d f . 
                        . . . f d f f d f f f d f . 
                        . . . f f . . f f . . f f .
            """),
            img("""
                . . . . . . . . . . . . . . 
                        . . . . e e e . . . . e e e 
                        . . . . c d d c . . c d d c 
                        . . . . c b d d f f d d b c 
                        . . . . c 3 b d b d d b 3 c 
                        . . . . f b 3 d d d d 3 b f 
                        . . . . e d d d d d d d d e 
                        . b f b e d f d d d d f d e 
                        . f d f f d d f d d f d d f 
                        . f d f b 2 d d b b d d b f 
                        . f b d b d 2 2 2 2 2 2 f . 
                        . . f f f d d d d d d d f . 
                        . . . . f d f f f d b d f . 
                        . . . . f f . . f f f f . .
            """),
            img("""
                . . . . . . . . . . . . . . 
                        . . . . e e e . . . . e e e 
                        . . . . c d d c . . c d d c 
                        . . . . c b d d f f d d b c 
                        . . . . c 3 b d b d d b 3 c 
                        . . . . f b 3 d d d d 3 b f 
                        . . . . e d d d d d d d d e 
                        b f b . e d f d d d d f d e 
                        f d f . f d d f d d f d d f 
                        f d f f b 2 d d b b d d b f 
                        f b d b b d 2 2 2 2 2 2 f . 
                        . f f f f d d d d d d d f . 
                        . . . . . f d f d b d f . . 
                        . . . . . f f f f f f . . .
            """)],
        500,
        controller.dx())
game.on_update(on_on_update2)
