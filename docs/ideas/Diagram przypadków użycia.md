<div hidden>
@startuml "Diagram przypadków użycia"
left to right direction
actor "Student" as st
package Studying {
    usecase "Do a simple\nexercise" as ust1
    usecase "Do a complex\nexercise" as ust2
    usecase "Show a hint" as ust3
    usecase "Show the solution" as ust4
    usecase "Show the detailed\nsolution" as ust5
    usecase "View overall scores" as ust6
}

st --> ust1
st --> ust2
st --> ust6

ust1 <.. ust3 : << extends >>
ust2 <.. ust3 : << extends >>

ust1 ..> ust4 : << includes >>
ust2 ..> ust5 : << includes >>

ust4 <.. ust5 : << extends >>


actor "Content creator" as cc
package "Content creation" as ccp {
    usecase "Add an exercise" as ucc1
    usecase "View an exercise" as ucc2
    usecase "Edit an exercise" as ucc3
    usecase "Delete an exercise" as ucc4
}

cc --> ccp

ucc2 <.. ucc3 : << extends >>
ucc2 <.. ucc4 : << extends >>


@enduml
</div hidden>

![]("Diagram przypadków użycia".svg)
