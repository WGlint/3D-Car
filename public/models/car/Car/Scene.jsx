/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: bra22y (https://sketchfab.com/bra22y)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tesla-roadster-free-e581e1fd9b774c5b955280ce73e7a708
Title: Tesla Roadster (Free)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.front_Burner_red_0.geometry} material={materials.Burner_red} />
          <mesh geometry={nodes.front_Burner_red_0_1.geometry} material={materials.Burner_red} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.headlight_exterior001_Matte_0.geometry} material={materials.Matte} />
          <mesh geometry={nodes.headlight_exterior001_Light_0.geometry} material={materials.Light} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.side_Burner_red_0.geometry} material={materials.Burner_red} />
          <mesh geometry={nodes.side_Burner_red_0_1.geometry} material={materials.Burner_red} />
          <mesh geometry={nodes.side_Burner_red_0_2.geometry} material={materials.Burner_red} />
          <mesh geometry={nodes.side_Burner_red_0_3.geometry} material={materials.Burner_red} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.side001_Matte_0.geometry} material={materials.Matte} />
          <mesh geometry={nodes.side001_RearLight_0.geometry} material={materials.CarExteriorShell} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.side002_RearLight_0.geometry} material={materials.CarExteriorShell} />
          <mesh geometry={nodes.side002_Matte_0.geometry} material={materials.Matte} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.headlightBulb002_Chrome_0.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.headlightBulb002_Light_0.geometry} material={materials.Light} />
        </group>
        <group position={[78.93, -27.71, 137.13]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={39.56}>
          <group rotation={[0, 0, Math.PI / 2]} scale={2.53}>
            <mesh geometry={nodes.tireTreadC_Tires_0.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC_Tires_0_1.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC_Tires_0_2.geometry} material={materials.Tires} />
          </group>
          <group position={[0.88, 0.07, 0.02]} rotation={[0, 0, Math.PI / 2]} scale={2.53}>
            <mesh geometry={nodes.tireTread_backup001__0.geometry} material={materials['tireTread_backup.001__0']} />
            <mesh geometry={nodes.tireTread_backup001__0_1.geometry} material={materials['tireTread_backup.001__0']} />
            <mesh geometry={nodes.tireTread_backup001__0_2.geometry} material={materials['tireTread_backup.001__0']} />
          </group>
          <mesh geometry={nodes.RimSpokes_Rims_0.geometry} material={materials.Rims} position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rimWheel_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotor_Rims2_0.geometry} material={materials.Rims2} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotorDetails_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlug_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlugB_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.brake_Rims2_0.geometry} material={materials.Rims2} position={[0.04, 0.11, 0]} rotation={[0, 0, Math.PI / 2]} scale={[2.53, 2.53, 2.44]} />
          <mesh geometry={nodes.cap_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.logoText001_Material_0.geometry} material={materials.Material} position={[-3.47, -2.02, 0.79]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
        </group>
        <group position={[79.11, -26.03, -145.22]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={41.66}>
          <group rotation={[0, 0, Math.PI / 2]} scale={2.53}>
            <mesh geometry={nodes.tireTreadC001_Tires_0.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC001_Tires_0_1.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC001_Tires_0_2.geometry} material={materials.Tires} />
          </group>
          <mesh geometry={nodes.RimSpokes001_Rims_0.geometry} material={materials.Rims} position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rimWheel001_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotor001_Rims2_0.geometry} material={materials.Rims2} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotorDetails001_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlug001_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlugB001_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.brake001_Rims2_0.geometry} material={materials.Rims2} position={[0.04, 0.11, 0]} rotation={[0, 0, Math.PI / 2]} scale={[2.53, 2.53, 2.44]} />
          <mesh geometry={nodes.cap001_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.logoText002_Material_0.geometry} material={materials.Material} position={[-3.47, -2.02, 0.79]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
        </group>
        <group position={[-79.59, -27.71, 137.13]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={39.56}>
          <group rotation={[0, 0, Math.PI / 2]} scale={2.53}>
            <mesh geometry={nodes.tireTreadC002_Tires_0.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC002_Tires_0_1.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC002_Tires_0_2.geometry} material={materials.Tires} />
          </group>
          <mesh geometry={nodes.RimSpokes002_Rims_0.geometry} material={materials.Rims} position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rimWheel002_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotor002_Rims2_0.geometry} material={materials.Rims2} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotorDetails002_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlug002_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlugB002_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.brake002_Rims2_0.geometry} material={materials.Rims2} position={[0.04, 0.11, 0]} rotation={[0, 0, Math.PI / 2]} scale={[2.53, 2.53, 2.44]} />
          <mesh geometry={nodes.cap002_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.logoText003_Material_0.geometry} material={materials.Material} position={[-3.47, -2.02, 0.79]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
        </group>
        <group position={[-79.45, -26.03, -145.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={41.66}>
          <group rotation={[0, 0, Math.PI / 2]} scale={2.53}>
            <mesh geometry={nodes.tireTreadC003_Tires_0.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC003_Tires_0_1.geometry} material={materials.Tires} />
            <mesh geometry={nodes.tireTreadC003_Tires_0_2.geometry} material={materials.Tires} />
          </group>
          <mesh geometry={nodes.RimSpokes003_Rims_0.geometry} material={materials.Rims} position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rimWheel003_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotor003_Rims2_0.geometry} material={materials.Rims2} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.rotorDetails003_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlug003_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.tireAirPlugB003_Matte_0.geometry} material={materials.Matte} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.brake003_Rims2_0.geometry} material={materials.Rims2} position={[0.04, 0.11, 0]} rotation={[0, 0, Math.PI / 2]} scale={[2.53, 2.53, 2.44]} />
          <mesh geometry={nodes.cap003_Rims_0.geometry} material={materials.Rims} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
          <mesh geometry={nodes.logoText004_Material_0.geometry} material={materials.Material} position={[-3.47, -2.02, 0.79]} rotation={[0, 0, Math.PI / 2]} scale={2.53} />
        </group>
        <mesh geometry={nodes.headlight_exterior_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.headlight_glass_Glass_0.geometry} material={materials.Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.top001_Glass_0.geometry} material={materials.Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.trunk_Burner_red_0.geometry} material={materials.Burner_red} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.window_Glass_0.geometry} material={materials.Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.front002_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Plane_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.frontBumperGaurd_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.front003_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bumper001_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bumper002_Matte_0.geometry} material={materials.Matte} position={[0.46, 0, 0.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bumper003_Matte_0.geometry} material={materials.Matte} position={[0.46, 0, 0.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bumper004_CarExteriorShell_0.geometry} material={materials.CarExteriorShell} position={[0.46, 0, 0.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bumper005_Matte_0.geometry} material={materials.Matte} position={[0.46, 0, 0.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.front004_CarExteriorShell_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.headlight_rearEnclosure_Chrome_0.geometry} material={materials.Chrome} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.frontWheelWell001_Burner_red_0.geometry} material={materials.Burner_red} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bumper_Burner_red_0.geometry} material={materials.Burner_red} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.door_Burner_red_0.geometry} material={materials.Burner_red} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.door001_CarExteriorShell_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.trunk001_CarExteriorShell_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.trunk002_Matte_0.geometry} material={materials.Matte} position={[0, 23.22, -209.84]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.RimSpokes_backup001__0.geometry} material={materials['tireTread_backup.001__0']} position={[81.56, -31.13, 137.13]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.logo_Chrome_0.geometry} material={materials.Chrome} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.logoText_Chrome_0.geometry} material={materials.Chrome} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.camera_CarExteriorShell_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.reflectors_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.trunkLight__0.geometry} material={materials['tireTread_backup.001__0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sideCameraHousing_Matte_0.geometry} material={materials.Matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.frontSeat_BlackOut_0.geometry} material={materials.CarExteriorShell} position={[36.55, 27.04, -45.86]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.06, 5.12, 5.74]} />
        <mesh geometry={nodes.frontSeat001_BlackOut_0.geometry} material={materials.CarExteriorShell} position={[-35.8, 27.04, -45.86]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.06, 5.12, 5.74]} />
        <mesh geometry={nodes.Cube_BlackOut_0.geometry} material={materials.CarExteriorShell} position={[36.3, 16.41, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={7.46} />
        <mesh geometry={nodes.Cube001_BlackOut_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.frame_BlackOut_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.top003_BlackOut_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.top002_BlackOut_0.geometry} material={materials.CarExteriorShell} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')