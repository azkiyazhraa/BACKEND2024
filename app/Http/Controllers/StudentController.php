<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index() {
        
        $students = Student::all();

        $data = [
            "message" => "Get All Students",
            "data"=> $students
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request) {
       $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
       ];

       $student = Student::create($input);

       $data = [
            "message" => "Student is created successfully",
            "data"=> $student

       ];
        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        $student = Student::find($id);

        if(!$student) {
            $data = [
                "message"=> "Student not found",
            ];

            return response()->json($data, 404);
        }

        $input = [
            "nama"=> $request->nama ?? $student->nama,
            "nim"=> $student->nim ?? $student->nim,
            "email"=> $request->email ?? $student->email,
            "jurusan"=> $student->jurusan ?? $student->jurusan,
        ];

        $student->update($input);

        $data = [
            "message"=> "Student is updated",
            "data"=> $student,
        ];

        return response ()->json($data, 200);
    }

   public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();

        $data = [
            "message" => 'Student Deleted',
            "data" => $student
        ];

        return response()->json($data, 200);
    }

    public function show($id) {
        $student = Student::find($id);

        if(!$student) {
            $data = [
                "message"=> "Student not found",
                "data"=> $student
            ];

            return response()->json($data, 404);
        }

        $data = [
            "message"=> "Get detail student",
        ];

        return response()->json($data, 200);
    }
}